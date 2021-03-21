import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../../../services/pizza-service/pizza';
import { PizzaService } from '../../../services/pizza-service/pizza.service';
import { MessageService } from 'primeng/api';
import { PatternValidatorMatch } from '../../../shared/pizzaUtils';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  providers: [MessageService],
  styleUrls: ['./pizza-create.component.css', '../../../app.component.css']
})
export class PizzaCreateComponent implements OnInit {

  pizzaForm: FormGroup;
  pizza: Pizza;
  submitted = false;

  // convenience getter for easy access to form fields
  get f() { return this.pizzaForm.controls; }

  constructor(private readonly fb: FormBuilder, private pizzaService: PizzaService, private notificationService: MessageService) {
    //rective form
    this.pizzaForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(PatternValidatorMatch.NameValidPattern)]],
      description: [],
      price: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  validationErrorMessage() {
    this.notificationService.add({ severity: 'error', summary: `Fill in missed fields` });
    setTimeout(() => {
      this.notificationService.clear();
    }, 6000);
  }

  onReset() {
    this.submitted = false;
    this.pizzaForm.reset();
  }

  submitForm() {
    this.submitted = true;

    if (this.pizzaForm.invalid) {
      this.validationErrorMessage();
      return;
    }
    this.pizza = this.pizzaForm.getRawValue();

    this.pizzaService.createPizza(this.pizza).subscribe(pizzaData => {
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
