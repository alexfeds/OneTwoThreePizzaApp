import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDisplayComponent } from './components/order/order-display/order-display.component';


const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'order-display', component: OrderDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
