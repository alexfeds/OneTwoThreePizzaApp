import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../../services/pizza-service/pizza';
import { PizzaService } from '../../../services/pizza-service/pizza.service';


interface PizzaSelection {
  name: string;
  id: number;
}

@Component({
  selector: 'app-pizza-picker',
  templateUrl: './pizza-picker.component.html',
  styleUrls: ['./pizza-picker.component.css']
})


export class PizzaPickerComponent implements OnInit {



  constructor(private pizzaService: PizzaService) { }

  pizzasOptions: PizzaSelection[];
  selectedPizza: PizzaSelection;

  pizzaType: Pizza;

  ngOnInit(): void {
    this.setPizzasOptions();
  }

  setPizzasOptions() {
    this.pizzaService.getPizzas().subscribe(pizzaData => {
    
      console.log("pizzas list", pizzaData);

      this.pizzasOptions = pizzaData.map(p => {
        return {
          name: p.name,
          id: p.pizzaID
        };
      });
    })
  }

  getPizzaById(id: string) {
    this.pizzaService.getPizzaById(id).subscribe(data => {
      this.pizzaType = data;
      console.log("pizza type by id", this.pizzaType)
    })

  }


  onDropChange(event: any) {
    if (event) {
      console.log("value", event.value.id)
      this.getPizzaById(event.value.id);
    }

  }

}
