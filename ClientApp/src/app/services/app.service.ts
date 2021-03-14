
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { LocationStrategy, Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private locationStrategy: LocationStrategy) { }


  

}
