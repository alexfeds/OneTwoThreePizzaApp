using OneTwoThreePizzaStore.Data.Models;
using System;
using System.Collections.Generic;

namespace OneTwoThreePizzaApp.Data
{
    public interface IPizzaRepository
    {
        CustomerViewModel CreateCustomer(CustomerViewModel customer);
        PizzaViewModel CreatePizza(PizzaViewModel pizza);
        IEnumerable<CustomerViewModel> GetCustomers();
        PizzaViewModel GetPizzaById(Guid pizzaId);
        IEnumerable<PizzaViewModel> GetPizzas();
    }
}