import { Customer } from "../customers-service/customer";
import { Pizza } from "../pizza-service/pizza";

export interface Order {
  orderNumber?: number;
  type: string;
  date?: number;
  customer: Customer;
  pizzaID: string;
  quantity: number;
}
