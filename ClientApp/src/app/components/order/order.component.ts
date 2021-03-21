import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../services/customers-service/customer';
import { OrdersService } from '../../services/orders-service/orders.service';
import { Order } from '../../services/orders-service/order';
import { Pizza } from '../../services/pizza-service/pizza';
import { MessageService } from 'primeng/api';
import { CustomerFormComponent } from '../customer/customer-form/customer-form.component';
import { PizzaPickerComponent } from '../pizza/pizza-picker/pizza-picker.component';
import { PatternValidatorMatch } from '../../shared/pizzaUtils';


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
  @ViewChild(PizzaPickerComponent) pizzaForm: PizzaPickerComponent;

  constructor(private readonly fb: FormBuilder, private ordersSerivce: OrdersService, private notificationService: MessageService) {

    //reactive form
    this.orderForm = this.fb.group({
      pizza: [null, Validators.required],
      quantity: [null, Validators.required, Validators.pattern(PatternValidatorMatch.IntegerValidPattern)],
      customer: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(PatternValidatorMatch.NameValidPattern)]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(PatternValidatorMatch.NameValidPattern)]],
        phoneNumber: [null, Validators.required],
        streetName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(PatternValidatorMatch.NameValidPattern)]],
      }),
    });

    //subscribe to changes from other compoennt that use the form
    this.orderForm.valueChanges.subscribe(newVal => {
      this.order = newVal;
      this.order = <Order>Object.assign({}, newVal); //assign values from form to model
    })

  }

  ngOnInit(): void {
  }

  showErrorMissedFields() {
    this.notificationService.add({ severity: 'error', summary: `Fill in missed fields` });
    setTimeout(() => { //timeout to clear error message 
      this.notificationService.clear();
    }, 6000);
  }

  onReset() {
    this.submitted = false;
    this.orderForm.reset();
  }

  submitForm() {
    this.submitted = true;
    //call submit in child components so can set submitted to true to do field validation in child components
    this.customerForm.submitForm();
    this.pizzaForm.submitForm();

    if (this.orderForm.invalid) {
      this.showErrorMissedFields();
      return;
    }
    //set order status to registred
    this.order.orderStatus = 1;

    this.ordersSerivce.createOrder(this.order).subscribe(data => {

      this.notificationService.clear();
      this.notificationService.add({ severity: 'success', summary: `Order ${data.orderNumber} added` });
      setTimeout(() => {  //timeout to clear error message 
        this.notificationService.clear();
      }, 6000);
    }, error => {
      this.notificationService.add({ severity: 'error', summary: `Error, try again` });
        setTimeout(() => {  //timeout to clear error message 
        this.notificationService.clear();
      }, 6000);

    });

  }


}
