import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "./environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/data`);
  }
}
