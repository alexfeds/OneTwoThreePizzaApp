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
    return this.http.post<Pizza>(this.baseUrl + 'pizza', pizza);
  }

  getPizzaById(pizzaId: string) {
    let params: HttpParams = new HttpParams()
      .append("pizzaId", pizzaId.toString())
    return this.http.get<Pizza>(this.baseUrl + 'pizza', { params: params });
  }

}
