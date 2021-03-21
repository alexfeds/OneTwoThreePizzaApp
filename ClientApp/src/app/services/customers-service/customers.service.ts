import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { APP_BASE_HREF } from '@angular/common';
import { Customer } from '../customers-service/customer';



@Injectable()
export class CustomersService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customers'); 
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl + 'customers', customer);
  }

}
