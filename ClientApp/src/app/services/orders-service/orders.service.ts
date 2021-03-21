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

    if (order.customer && order.customer.phoneNumber) {
      order.customer.phoneNumber = order.customer.phoneNumber.toString();
    }
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  getOrderById(orderNumber: string) {
    let params: HttpParams = new HttpParams()
      .append("orderId", orderNumber.toString())
    return this.http.get<Order>(this.baseUrl + 'orders', { params: params });
  }

  updateOrderStatus(order: Order) {
    return this.http.put<Order>(this.baseUrl + 'orders/status', order);
  }

}
