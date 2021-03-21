import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Pizza } from '../../../services/pizza-service/pizza';
import { PizzaService } from '../../../services/pizza-service/pizza.service';


interface PizzaSelection {
  name: string;
  pizzaID: string;
}

@Component({
  selector: 'app-pizza-picker',
  templateUrl: './pizza-picker.component.html',
  styleUrls: ['./pizza-picker.component.css']
})


export class PizzaPickerComponent implements OnInit {

  @Input() pizzaPickerForm: FormGroup;

  // convenience getter for easy access to form fields
  get f() { return this.pizzaPickerForm.controls; }
  submitted = false;

  constructor(private pizzaService: PizzaService, private readonly fb: FormBuilder, private notificationService: MessageService) {

    //reactive form
    this.pizzaPickerForm = this.fb.group({
      pizza: this.selectedPizza,
      quantity: [null, Validators.required]
    });

  }

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
          pizzaID: p.pizzaID
        };
      });

      if (pizzaData.length) {
        this.selectedPizza = this.pizzasOptions[0]; //sets the pizza in picker
        this.getPizzaById(this.selectedPizza.pizzaID); //gets pizza for display
      }
      //if no pizzas created
      if (!pizzaData.length) {
        this.validationErrorMessage();
      }
      

    })
  }

  getPizzaById(id: string) {
    this.pizzaService.getPizzaById(id).subscribe(data => {
      this.pizzaType = data;
    })

  }


  onDropChange(event: any) {
    if (event) {
      this.getPizzaById(event.value.pizzaID);
    }

  }

  validationErrorMessage() {
    this.notificationService.add({ severity: 'error', summary: `You need to add at leat one pizza` });
    setTimeout(() => {
      this.notificationService.clear();
    }, 6000);
  }

  submitForm() {
    this.submitted = true;
  }
}
