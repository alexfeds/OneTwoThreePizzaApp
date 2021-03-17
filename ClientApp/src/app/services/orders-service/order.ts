import { Customer } from "../customers-service/customer";
import { Pizza } from "../pizza-service/pizza";

export interface Order {
  orderNumber?: string;
  date?: number;
  customer: Customer;
  pizza: Pizza;
  quantity: number;
  orderStatus: OrderSatus;
}

export enum OrderSatus {
  Registered = 1,
  Preparation = 2,
  ReadyToDeliver = 3,
  Delivered = 4
}
