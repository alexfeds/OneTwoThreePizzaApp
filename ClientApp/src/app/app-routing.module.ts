import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { PizzaComponent } from './components/pizza/pizza.component';


const routes: Routes = [
  { path: 'order', component: OrderCreateComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'pizza', component: PizzaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
