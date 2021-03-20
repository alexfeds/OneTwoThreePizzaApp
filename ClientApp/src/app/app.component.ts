
import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MenuItem, MessageService } from 'primeng/api';
import { CustomersService } from './services/customers-service/customers.service';
import { Customer } from './services/customers-service/customer';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomersService, MessageService]
})


export class AppComponent implements OnInit {

  customers: Customer[];
  menuItems: MenuItem[];
  urlHeading: string;
  tabIndex: MenuItem;

  constructor(private cusomerService: CustomersService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.menuItems = [
      { label: 'New Order', icon: 'pi pi-fw pi-pencil', routerLink: ['order'], routerLinkActiveOptions: { exact: true } },
      { label: 'Orders', icon: 'pi pi-fw pi-list', routerLink: ['orders'], routerLinkActiveOptions: { exact: true } },
      { label: 'Customers', icon: 'pi pi-fw pi-users', routerLink: ['customers'], routerLinkActiveOptions: { exact: true } },
      { label: 'New Pizza', icon: 'pi pi-fw pi-file', routerLink: ['pizza'], routerLinkActiveOptions: { exact: true }},
      { label: 'Pizzas', icon: 'pi pi-fw pi-file', routerLink: ['pizzas'], routerLinkActiveOptions: { exact: true } },
    ];

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log("current url", val.url); // event.url has current url
                           //filter url for nice name
        this.urlHeading = val.url.substring(1).split('/')[0];
  
      }
    });
  }

  getCustomers() {
    this.cusomerService.getCustomers().subscribe(customerData => {
      this.customers = customerData;
      console.log("Cusomers", this.customers);
    })

  }
}
