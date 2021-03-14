import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_BASE_HREF } from '@angular/common';



@Injectable()
export class ReportsService {

  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) private baseHref: string) { }

  
}
