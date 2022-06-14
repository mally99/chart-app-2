import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { Chart, Type, Value } from '../../models/chart.model';

@Component({
  selector: 'app-mixed-charts',
  templateUrl: './mixed-charts.component.html',
  styleUrls: ['./mixed-charts.component.css']
})
export class MixedChartsComponent implements OnInit {
  chartValues: Observable<Chart[]> | undefined;
  barData: Value[] = [];
  lineData: Value[] = [];
  scatterData: Value[] = [];

  constructor(private store: Store<AppState>) {
    this.chartValues = this.store.select('chartValues');
    this.chartValues?.forEach(chart => {
      chart.map(element => (
        this.fillData(element)
      ));
    });
  }
  fillData(chart: Chart) {
    switch (chart.type) {
      case Type.bar:
        if (this.barData.find(element => element === chart))
          break;
        this.barData.push(new Value(chart.x, chart.y));
        break;
      case Type.line:
        if (this.lineData.find(element => element === chart))
          break;
        this.lineData.push(new Value(chart.x, chart.y));
        break;
      case Type.scatted:
        if (this.scatterData.find(element => element === chart))
          break;
        this.scatterData.push(new Value(chart.x, chart.y));
        break;
      default:
        break;

    }
  }
  public chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  public chartLegend = true;
  public chartData: any;

  ngOnInit(): void {
    this.chartData = [{
      type: 'bar',
      label: "Bar Dataset",
      data: this.barData,
      fill: false
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: this.lineData,
      fill: false
    },
    {
      type: 'scatter',
      label: 'Scater Dataset',
      data: this.scatterData
    }
    ];
  }

}
