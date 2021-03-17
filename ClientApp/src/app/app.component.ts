
import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MenuItem, MessageService } from 'primeng/api';
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
  menuItems: MenuItem[];

  constructor(private cusomerService: CustomersService) { }

  ngOnInit() {
    this.menuItems = [
      { label: 'Order', icon: 'pi pi-fw pi-pencil', routerLink: ['order'] },
      { label: 'Customers', icon: 'pi pi-fw pi-users', routerLink: ['customers'] },
      { label: 'Orders', icon: 'pi pi-fw pi-list', routerLink: ['orders'] },
      { label: 'Pizza', icon: 'pi pi-fw pi-file', routerLink: ['pizza'] },
      { label: 'Order', icon: 'pi pi-fw pi-file', routerLink: ['pizza'] }
    ];
  }

  getCustomers() {

    this.cusomerService.getCustomers().subscribe(customerData => {
      this.customers = customerData;

      console.log("Cusomers", this.customers);
    })

  }
}
