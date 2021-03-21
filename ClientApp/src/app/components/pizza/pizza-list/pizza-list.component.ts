import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Pizza } from '../../../services/pizza-service/pizza';
import { PizzaService } from '../../../services/pizza-service/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css', '../../../app.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  pizzas: Pizza[];

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas() {
    this.pizzaService.getPizzas().subscribe(pizzaData => {
      this.pizzas = pizzaData;
    })
  }


}
