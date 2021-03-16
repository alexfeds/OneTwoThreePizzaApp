import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../../../services/customers-service/customer';
import { CustomersService } from '../../../services/customers-service/customers.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer;

  constructor(private readonly fb: FormBuilder, private customerService: CustomersService) {

    this.customerForm = this.fb.group({
      firstName: [],
      lastName: [],
      phoneNumber: [],
      streetName: [],
    });

  }

  ngOnInit(): void {
  }


  submitForm() {
    console.log("Form submit value", this.customerForm.getRawValue())

    this.customer = this.customerForm.getRawValue();

    this.customerService.createCustomer(this.customer).subscribe(customerData => {

      console.log("Created cusomer", customerData)
    }
    )

  }

}
