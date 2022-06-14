import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chart, Type } from './models/chart.model';
import { AppState } from './app.state';
import { ChartService } from './chart.service';
import * as ChartActions from "./actions/chart.actions"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = true;
  title = 'chart-app';
}
