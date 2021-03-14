import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pizza } from '../../../services/pizza-service/pizza';
import { PizzaService } from '../../../services/pizza-service/pizza.service';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.css']
})
export class PizzaCreateComponent implements OnInit {

  pizzaForm: FormGroup;
  pizza: Pizza;

  constructor(private readonly fb: FormBuilder, private pizzaService: PizzaService) {


    this.pizzaForm = this.fb.group({
      name: [],
      description: [],
      price: []
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log("Form submit value", this.pizzaForm.getRawValue())

    this.pizza = this.pizzaForm.getRawValue();

    this.pizzaService.createPizza(this.pizza).subscribe(pizzaData => {

      console.log("Created pizza", pizzaData)
    }
    )

  }

}
