
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
  pagaNameMain: string;
  menuItem: MenuItem;

  constructor(private cusomerService: CustomersService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.menuItems = [
      { label: 'New Order', icon: 'pi pi-fw pi-pencil', routerLink: ['order'] },
      { label: 'Orders', icon: 'pi pi-fw pi-list', routerLink: ['orders'] },
      { label: 'Customers', icon: 'pi pi-fw pi-users', routerLink: ['customers'] },
      { label: 'New Pizza', icon: 'pi pi-fw pi-file', routerLink: ['pizza'] },
      { label: 'Pizzas', icon: 'pi pi-fw pi-file', routerLink: ['pizzas'] },
    ];

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {

        //formats url to a pritty name to be used on main page
        this.pagaNameMain = this.prittyfyName(val.url);
        //set active tab
        this.setActiveTabByName(val.url);

      }
    });
  }

  //filter url for nice name
  prittyfyName(url: string) {
    return url.substring(1).split('/')[0];
  }

  //sets manually active tab based on route name
  setActiveTabByName(url: string) {
    let pageName = this.prittyfyName(url);
    if (pageName == "customers") {
      this.menuItem = this.menuItems[2]
    }
    if (pageName == "order") {
      this.menuItem = this.menuItems[0]
    }
    if (pageName == "orders") {
      this.menuItem = this.menuItems[1]
    }
    if (pageName == "pizza") {
      this.menuItem = this.menuItems[3]
    }
    if (pageName == "pizzas") {
      this.menuItem = this.menuItems[4]
    }
  }

}
