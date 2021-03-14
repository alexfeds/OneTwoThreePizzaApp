
import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MessageService } from 'primeng/api';
import { CustomersService } from './services/customers-service/customers.service';
import { Customer } from './services/customers-service/customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomersService]
})


export class AppComponent implements OnInit {

  customers: Customer[];

  constructor(private cusomerService: CustomersService) { }

  ngOnInit() { }

  getCustomers() {


    this.cusomerService.getCustomers().subscribe(customerData => {
      this.customers = customerData;

      console.log("Cusomers", this.customers);
    })

  }
}
