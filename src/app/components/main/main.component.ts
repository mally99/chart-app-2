import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chart, Type } from '../../models/chart.model';
import { AppState } from '../../app.state';
import { ChartService } from '../../chart.service';
import * as ChartActions from "../../actions/chart.actions"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  chartValues: Observable<Chart[]>;

  constructor(private store: Store<AppState>, private chartService: ChartService) {
    this.chartValues = this.store.select('chartValues');
    let headers = { 'Token': '1234' };
    this.chartService.ValuesBarChart(headers).subscribe(res => {
      const data = res as Chart[];
      data.map(chart => {
        this.initStore(chart.x, chart.y, Type.bar)
      })
    });
    this.chartService.ValuesLineChart(headers).subscribe(res => {
      const data = res as Chart[];
      data.map(chart => {
        this.initStore(chart.x, chart.y, Type.line)
      })
    });
    this.chartService.ValuesScatterChart(headers).subscribe(res => {
      const data = res as Chart[];
      data.map(chart => {
        this.initStore(chart.x, chart.y, Type.scatted)
      })
    });

    console.log('after init:', this.chartValues)
  }
  initStore(x: string, y: number, type: Type) {
    this.store.dispatch(
      new ChartActions.AddChart({ x: x, y: y, type: type })
    )
  }
}
