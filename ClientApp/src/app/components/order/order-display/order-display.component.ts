import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Order, OrderSatus } from '../../../services/orders-service/order';
import { OrdersService } from '../../../services/orders-service/orders.service';
import { OrderStatusPipe } from '../../../shared/pipes/delivery-status.pipe';


interface OrderStatusOptions {
  name: string;
  code: number;
}


@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {


  order: Order;

  OrderStatusOptions: OrderStatusOptions[];

  selectedOrderStatus: OrderStatusOptions;

  constructor(private orderService: OrdersService, private activatedRoute: ActivatedRoute, private pipe: OrderStatusPipe, private notificationService: MessageService) {

    this.OrderStatusOptions = [
      { name: "Registered", code: OrderSatus.Registered },
      { name: "Preparation", code: OrderSatus.Preparation },
      { name: "ReadyToDeliver", code: OrderSatus.ReadyToDeliver },
      { name: "Delivered", code: OrderSatus.Delivered },

    ];
    this.selectedOrderStatus = this.OrderStatusOptions[0];
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {

      this.order = data.data;
      console.log("this.order", this.order)

      //set order status from current order
      if (this.order.orderStatus) {
        this.selectedOrderStatus.name = this.pipe.transform(this.order.orderStatus);
      }

    })
  }

  setOrderStatus() {
    console.log("seeting order status", this.selectedOrderStatus)

    var order = <Order>{};

    order.orderNumber = this.order.orderNumber;
    order.orderStatus = this.selectedOrderStatus.code;

    this.orderService.updateOrderStatus(order).subscribe(order => {
      console.log("updated order status", order)
      this.notificationService.clear();
      this.notificationService.add({ severity: 'success', summary: `Order: ${this.order.orderNumber} updated status to ${this.selectedOrderStatus.name}` });
      setTimeout(() => {
        this.notificationService.clear();
      }, 6000);
    }, error => {
      this.notificationService.add({ severity: 'error', summary: `Error, try again` });
      setTimeout(() => {
        this.notificationService.clear();
      }, 6000);
    });
  }
}


@Injectable()
export class OrderDisplayResolver implements Resolve<Order>{

  constructor(private orderService: OrdersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return  this.orderService.getOrderId(route.params.orderNumber);
  }
}
