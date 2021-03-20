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
    console.log("order from service", order)

    if (order.customer && order.customer.phoneNumber) {
      order.customer.phoneNumber = order.customer.phoneNumber.toString();
    }
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  getOrderId(orderNumber: string) {
    let params: HttpParams = new HttpParams()
      .append("orderId", orderNumber.toString())
    console.log("order by id params", params)
    return this.http.get<Order>(this.baseUrl + 'orders', { params: params });
  }

  updateOrderStatus(order: Order) {
    console.log("order status update object from service", order)
    return this.http.put<Order>(this.baseUrl + 'orders/status', order);
  }

}
