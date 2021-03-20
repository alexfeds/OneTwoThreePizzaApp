import { Component, OnInit } from '@angular/core';
import { Order } from '../../../services/orders-service/order';
import { OrdersService } from '../../../services/orders-service/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css', '../../../app.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private ordeService: OrdersService) { }

  orders: Order[];

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordeService.getOrders().subscribe(ordersData => {
      this.orders = ordersData;
      console.log("orders list", ordersData);
    })
  }


}
