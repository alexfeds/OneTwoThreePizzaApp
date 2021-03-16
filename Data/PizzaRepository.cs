using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using OneTwoThreePizzaApp.Data.Entities;
using OneTwoThreePizzaStore.Data.Models;
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
        public IEnumerable<CustomerViewModel> GetCustomers()
        {

            IEnumerable<Customer> customerEntities = _ctx.Customers;

            IEnumerable<CustomerViewModel> customers =
                customerEntities
                .Select(c =>
                     new CustomerViewModel
                     {
                         CustID = c.CustID,
                         FirstName = c.FirstName,
                         LastName = c.LastName,
                         StreetName = c.StreetName,
                         PhoneNumber = c.PhoneNumber
                     });

            return customers;
        }

        public CustomerViewModel CreateCustomer(CustomerViewModel customerRequest)
        {

            var customer = new Customer()
            {
                FirstName = customerRequest.FirstName,
                LastName = customerRequest.LastName,
                StreetName = customerRequest.StreetName,
                PhoneNumber = customerRequest.PhoneNumber
            };

            //save results to db
            _ctx.Customers.Add(customer);
            _ctx.SaveChanges();
            return customerRequest;
        }


        //pizza
        public IEnumerable<PizzaViewModel> GetPizzas()
        {

            IEnumerable<Pizza> pizzaEntities = _ctx.Pizza;

            IEnumerable<PizzaViewModel> pizzas =
                pizzaEntities
                .Select(p =>
                     new PizzaViewModel
                     {
                         pizzaID = p.pizzaID,
                         Name = p.Name,
                         Description = p.Description,
                         Price = p.Price,
                     });

            return pizzas;
        }

        public PizzaViewModel GetPizzaById(Guid pizzaId)
        {
            var pizzaEntity = _ctx.Pizza.First(pizza => pizza.pizzaID == pizzaId);
            var pizza = new PizzaViewModel()
            {
                pizzaID = pizzaEntity.pizzaID,
                Name = pizzaEntity.Name,
                Description = pizzaEntity.Description,
                Price = pizzaEntity.Price
            };

            return pizza;
        }

        public PizzaViewModel CreatePizza(PizzaViewModel pizzaRequest)
        {
            var pizzaEntity = new Pizza()
            {
                pizzaID = pizzaRequest.pizzaID,
                Name = pizzaRequest.Name,
                Description = pizzaRequest.Description,
                Price = pizzaRequest.Price
            };

            //save results to db
            _ctx.Pizza.Add(pizzaEntity);
            _ctx.SaveChanges();
            return pizzaRequest;
        }

        //orders
        public OrderViewModel CreateOrder(OrderViewModel order)
        {
            try
            {
                var viewModelCusomter = new Customer();
                viewModelCusomter = order.Customer;
                Customer user = new Customer()
                {
                    FirstName = viewModelCusomter.FirstName,
                    LastName = viewModelCusomter.LastName,
                    PhoneNumber = viewModelCusomter.PhoneNumber,
                    StreetName = viewModelCusomter.StreetName

                };
                _ctx.Customers.Add(user);

                Pizza existingPizza = _ctx.Pizza.FirstOrDefault(p => p.pizzaID == order.PizzaID);
                var myOrder = new Order()
                {
                    Date = DateTime.Now,
                    Type = "delivery",
                    Customer = user
                };
                myOrder.Pizza = existingPizza;
                _ctx.Order.Add(myOrder);
            }
            finally
            {
                _ctx.SaveChanges();
            }
            return order;
        }
        public IEnumerable<OrderViewModel> GetOrders()
        {
            {
                IEnumerable<Order> orderEntities = _ctx.Order;

                IEnumerable<OrderViewModel> orders =
                    orderEntities
                    .Select(o =>
                         new OrderViewModel
                         {
                             OrderNumber = o.OrderNumber,
                             Type = o.Type,
                             Date = o.Date,
                             Customer = o.Customer
                         });

                return orders;
            }
        }
    }
}
