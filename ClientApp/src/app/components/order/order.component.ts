import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../../services/customers-service/customer';
import { OrdersService } from '../../services/orders-service/orders.service';
import { Order } from '../../services/orders-service/order';
import { Pizza } from '../../services/pizza-service/pizza';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css', '../../app.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  customer: Customer;
  order: Order;
  pizza: Pizza;


  constructor(private readonly fb: FormBuilder, private ordersSerivce: OrdersService, private notificationService: MessageService) {

    this.orderForm = this.fb.group({
      pizza: [],
      customer: this.fb.group({
        firstName: [],
        lastName: [],
        phoneNumber: [],
        streetName: [],
      }),
    });


    this.orderForm.valueChanges.subscribe(newVal => {

      console.log("form changes", newVal)

      this.order = newVal;
      this.order = <Order>Object.assign({}, newVal);


      console.log("this.order object assigned", this.order)
    })

  }


  ngOnInit(): void {
  }



  createOrder() {

    console.log("order", this.order)
    this.order.orderStatus = 1;

    this.ordersSerivce.createOrder(this.order).subscribe(data => {
      console.log("Order created", data)

      this.notificationService.clear();
      this.notificationService.add({ severity: 'success', summary: `Order ${this.order.orderNumber} added` });
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
