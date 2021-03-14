using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaApp.Data
{
    public class PizzaRepository : IPizzaRepository
    {

        private PizzaStoreContext _ctx;

        public PizzaRepository(PizzaStoreContext ctx)
        {
            _ctx = ctx;

        }

        //customer
        public IEnumerable<Customer> GetCustomers()
        {
            return _ctx.Customers;
        }

        public Customer CreateCustomer(Customer customer)
        {
            //save results to db
            _ctx.Customers.Add(customer);
            _ctx.SaveChanges();
            return customer;
        }


       //pizza
        public IEnumerable<Pizza> GetPizzas()
        {
            return _ctx.Pizza;
        }

        public Pizza GetPizzaById(Guid pizzaId)
        {
            return _ctx.Pizza.First(pizza => pizza.pizzaID == pizzaId);

        }

        public Pizza CreatePizza(Pizza pizza)
        {
            //save results to db
            _ctx.Pizza.Add(pizza);
            _ctx.SaveChanges();
            return pizza;
        }

    }
}
