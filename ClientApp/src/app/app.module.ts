import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

//primeng
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton';


import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';



//components
import { PizzaCreateComponent } from './components/pizza/pizza-create/pizza-create.component';
import { PizzaListComponent } from './components/pizza/pizza-list/pizza-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { PizzaPickerComponent } from './components/pizza/pizza-picker/pizza-picker.component';
import { PizzaComponent } from './components/pizza/pizza.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaCreateComponent,
    PizzaListComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    OrderListComponent,
    OrderCreateComponent,
    PizzaPickerComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    //primeng
    TableModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ProgressBarModule,
    InputNumberModule,
    SidebarModule,
    ConfirmDialogModule,
    ToolbarModule,
    SelectButtonModule,

    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, { provide: APP_BASE_HREF, useValue: "http://localhost:4200" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
