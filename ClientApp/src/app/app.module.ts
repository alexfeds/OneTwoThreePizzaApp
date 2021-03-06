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
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

//pipes
import { OrderStatusPipe } from './shared/pipes/delivery-status.pipe';

//components
import { PizzaCreateComponent } from './components/pizza/pizza-create/pizza-create.component';
import { PizzaListComponent } from './components/pizza/pizza-list/pizza-list.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { PizzaPickerComponent } from './components/pizza/pizza-picker/pizza-picker.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { OrderDisplayComponent, OrderDisplayResolver } from './components/order/order-display/order-display.component';
import { OrderStatusPickerComponent } from './shared/order-status-picker/order-status-picker.component';



@NgModule({
  declarations: [
    AppComponent,
    PizzaCreateComponent,
    PizzaListComponent,
    CustomerListComponent,
    OrderListComponent,
    PizzaPickerComponent,
    PizzaComponent,
    OrderComponent,
    CustomerFormComponent,
    OrderDisplayComponent,
    OrderStatusPickerComponent,
    //pipes
    OrderStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

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
    DropdownModule,
    TabMenuModule,
    ScrollPanelModule,

    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, { provide: APP_BASE_HREF, useValue: "http://localhost:4200" },
    OrderDisplayResolver,
    OrderStatusPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
