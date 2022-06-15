import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TOKEN } from './config/constants';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  readonly APIUrl = "http://localhost:56140";
  headers = { 'Token': TOKEN };

  constructor(private http: HttpClient) { }

  ValuesBarChart() {
    return this.http.post(this.APIUrl + '/ValuesBarChart', this.headers);
  }
  ValuesLineChart() {
    return this.http.post(this.APIUrl + '/ValuesLineChart', this.headers);
  }
  ValuesScatterChart() {
    return this.http.post(this.APIUrl + '/ValuesScatterChart', this.headers);
  }
}
