import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chart, Type } from '../../models/chart.model';
import { AppState } from '../../app.state';
import { ChartService } from '../../chart.service';
import * as ChartActions from "../../actions/chart.actions"
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  chartValues: Observable<Chart[]>;

  constructor(private store: Store<AppState>, private chartService: ChartService, private router: Router) {
    this.chartValues = this.store.select('chartValues');
    this.chartService.ValuesBarChart().subscribe(res => {
      const data = res as Chart[];
      data.map(chart => {
        this.initStore(chart.x, chart.y, Type.bar)
      })
    });
    this.chartService.ValuesLineChart().subscribe(res => {
      const data = res as Chart[];
      data.map(chart => {
        this.initStore(chart.x, chart.y, Type.line)
      })
    });
    this.chartService.ValuesScatterChart().subscribe(res => {
      const data = res as Chart[];
      data.map(chart => {
        this.initStore(chart.x, chart.y, Type.scatted)
      })
    });

    console.log('after init:', this.chartValues)
  }
  ngOnInit(): void {
    // this.router.navigate(['./mixed-chart'], { fragment: 'drop1' })
  }
  initStore(x: string, y: number, type: Type) {
    this.store.dispatch(
      new ChartActions.AddChart({ x: x, y: y, type: type })
    )
  }
}
