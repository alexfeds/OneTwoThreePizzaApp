import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../../services/customers-service/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css', '../../../app.component.css']
})

export class CustomerFormComponent implements OnInit {

  @Input() customerForm: FormGroup;
  customer: Customer;
  control: AbstractControl
  submitted: boolean;

  constructor(private readonly fb: FormBuilder) {

    this.customerForm = this.fb.group({
      customer: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
        phoneNumber: [null, Validators.required],
        streetName: ['', Validators.required],
      }),
    });
  }

 
  ngOnInit(): void { }

  submitForm() {
    this.submitted = true;
  }

}
