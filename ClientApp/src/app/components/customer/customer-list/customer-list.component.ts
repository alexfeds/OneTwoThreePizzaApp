import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../services/customers-service/customer';
import { CustomersService } from '../../../services/customers-service/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomersService) { }

  customers: Customer[];

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(customersData => {
      this.customers = customersData;
      console.log("customer list", this.customers);
    })
  }

}
