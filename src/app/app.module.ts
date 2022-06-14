import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import { MixedChartsComponent } from './components/mixed-charts/mixed-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartService } from './chart.service';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { addChartReducer } from './reducers/chart.reducer';
import { MainComponent } from './components/main/main.component'
const routes: Routes = [
  { path: 'mixed-chart', component: MixedChartsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MixedChartsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgChartsModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule,
    StoreModule.forRoot({
      chartValues: addChartReducer
    }),
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
