import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  getOrders(): Observable<Order[]> {

    return this.http.get<Order[]>(this.baseUrl + 'orders/all');

  }


  createOrder(order: Order): Observable<Order> {
    /*    customer.custId = "d6048908-fd20-4a98-abd7-edebaa34bfbb";*/

    console.log("order from service", order)
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

}
