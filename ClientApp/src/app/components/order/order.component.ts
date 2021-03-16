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
      selectedPizza: [],
      firstName: [],
      lastName: [],
      phoneNumber: [],
      streetName: [],
    });


    this.orderForm.valueChanges.subscribe(newVal => {

      console.log("form changes", newVal)

      this.order = newVal;


      this.customer = {
        firstName: newVal.firstName,
        lastName: newVal.lastName,
        phoneNumber: newVal.phoneNumber,
        streetName: newVal.streetName
      }


      if (newVal && newVal.selectedPizza) {

 
        this.pizza.pizzaID = newVal.selectedPizza.id

        this.order = {
          type: "TakeAway",
          customer: this.customer,
          quantity: 2,
          pizza: this.pizza
        }
      }

     

      console.log("this.order", this.order)
    })

  }


  ngOnInit(): void {
  }



  createOrder() {

    //this.order = {
    //  type: "new",
    //  pizzaID: "fff",
    //  customer:  this.customer
    //}

    //this.order.type = "new";
    //this.order.pizza = this.pizza;
    //this.order.customer = this.customer;
   
   



    this.ordersSerivce.createOrder(this.order).subscribe(data => {
      console.log("Order created", data)
    })

  }


}
