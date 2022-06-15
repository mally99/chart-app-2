import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TOKEN } from './config/constants';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  readonly APIUrl = "http://localhost:56140";


  constructor(private http: HttpClient) { }

  ValuesBarChart() {
    return this.http.post(this.APIUrl + '/ValuesBarChart', {});
  }
  ValuesLineChart() {
    return this.http.post(this.APIUrl + '/ValuesLineChart', {});
  }
  ValuesScatterChart() {
    return this.http.post(this.APIUrl + '/ValuesScatterChart', {});
  }
}
