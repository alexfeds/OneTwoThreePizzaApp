import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../services/customers-service/customer';
import { OrdersService } from '../../services/orders-service/orders.service';
import { Order } from '../../services/orders-service/order';
import { Pizza } from '../../services/pizza-service/pizza';
import { MessageService } from 'primeng/api';
import { CustomerFormComponent } from '../customer/customer-form/customer-form.component';


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
  submitted = false;
  @ViewChild(CustomerFormComponent) customerForm: CustomerFormComponent;

  constructor(private readonly fb: FormBuilder, private ordersSerivce: OrdersService, private notificationService: MessageService) {

    this.orderForm = this.fb.group({
      pizza: [],
      customer: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
        phoneNumber: [null, Validators.required],
        streetName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
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


  validationErrorMessage() {
    this.notificationService.add({ severity: 'error', summary: `Fill in missed fields` });
    setTimeout(() => {
      this.notificationService.clear();
    }, 6000);
  }

  onReset() {
    this.submitted = false;
    this.orderForm.reset();
  }

  submitForm() {
    this.submitted = true;
    this.customerForm.submitForm();

    if (this.orderForm.invalid) {
      this.validationErrorMessage();
      return;
    }

    console.log("order", this.order)
    //set order status to registred
    this.order.orderStatus = 1;

    this.ordersSerivce.createOrder(this.order).subscribe(data => {
      console.log("Order created", data)

      this.notificationService.clear();
      this.notificationService.add({ severity: 'success', summary: `Order ${data.orderNumber} added` });
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
