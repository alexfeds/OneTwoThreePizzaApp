import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pizza } from '../../../services/pizza-service/pizza';
import { PizzaService } from '../../../services/pizza-service/pizza.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  providers: [MessageService],
  styleUrls: ['./pizza-create.component.css', '../../../app.component.css']
})
export class PizzaCreateComponent implements OnInit {

  pizzaForm: FormGroup;
  pizza: Pizza;

  constructor(private readonly fb: FormBuilder, private pizzaService: PizzaService, private notificationService: MessageService) {

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
      this.notificationService.clear();
      this.notificationService.add({ severity: 'success', summary: `Pizza ${this.pizza.name} added` });
      setTimeout(() => {
        this.notificationService.clear();
      }, 6000);
    }, error => {
      this.notificationService.add({ severity: 'error', summary: `Error, try again` });
      setTimeout(() => {
        this.notificationService.clear();
      }, 6000);
    });
    

  }

 

}
