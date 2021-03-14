import { Customer } from "../customers-service/customer";

export interface Order {
  orderNumber: number;
  type: string;
  date: number;
  customer: Customer;
}
