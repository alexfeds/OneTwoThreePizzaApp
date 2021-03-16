import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../../../services/customers-service/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})

export class CustomerFormComponent implements OnInit {

  @Input() customerForm: FormGroup;
  customer: Customer;

  constructor(private readonly fb: FormBuilder) {


    this.customerForm = this.fb.group({
      firstName: [],
      lastName: [],
      phoneNumber: [],
      streetName: [],
    });
  }

 
  ngOnInit(): void {
  }

}
