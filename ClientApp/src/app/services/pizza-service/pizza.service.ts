import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pizza } from '../pizza-service/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;


  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.baseUrl + 'pizza/all');
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    /*    customer.custId = "d6048908-fd20-4a98-abd7-edebaa34bfbb";*/
    console.log("pizza from service", pizza)
    return this.http.post<Pizza>(this.baseUrl + 'pizza', pizza);
  }

  getPizzaById(pizzaId: string) {
    let params: HttpParams = new HttpParams()
      .append("pizzaId", pizzaId.toString())
    console.log("pizza by id params", params) 
    return this.http.get<Pizza>(this.baseUrl + 'pizza', { params: params });
  }

}
