import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  readonly APIUrl = "http://localhost:56140";

  constructor(private http: HttpClient) { }

  ValuesBarChart(val: any) {
    return this.http.post(this.APIUrl + '/ValuesBarChart', val);
  }
  ValuesLineChart(val: any) {
    return this.http.post(this.APIUrl + '/ValuesLineChart', val);
  }
  ValuesScatterChart(val: any) {
    return this.http.post(this.APIUrl + '/ValuesScatterChart', val);
  }
}
