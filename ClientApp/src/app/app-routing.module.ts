import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { OrderListComponent } from './components/order/order-list/order-list.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDisplayComponent, OrderDisplayResolver } from './components/order/order-display/order-display.component';
import { PizzaListComponent } from './components/pizza/pizza-list/pizza-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'pizza', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'pizzas', component: PizzaListComponent },
  { path: 'order-display/:orderNumber', component: OrderDisplayComponent, resolve: { data: OrderDisplayResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
