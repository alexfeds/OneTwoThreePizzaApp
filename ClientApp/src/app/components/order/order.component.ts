import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../../services/customers-service/customer';
import { OrdersService } from '../../services/orders-service/orders.service';
import { Order } from '../../services/orders-service/order';
import { Pizza } from '../../services/pizza-service/pizza';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  customer: Customer;
  order: Order;
  pizza: Pizza;


  constructor(private readonly fb: FormBuilder, private ordersSerivce: OrdersService) {

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

    this.ordersSerivce.createOrder(this.order).subscribe(data => {
      console.log("Order created", data)
    })

  }


}
