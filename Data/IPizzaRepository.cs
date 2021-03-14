using System.Collections.Generic;

namespace OneTwoThreePizzaApp.Data
{
    public interface IPizzaRepository
    {
        Customer CreateCustomer(Customer customer);
        Pizza CreatePizza(Pizza pizza);
        IEnumerable<Customer> GetCustomers();
        IEnumerable<Pizza> GetPizzas();
    }
}