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

                Pizza existingPizza = _ctx.Pizza.FirstOrDefault(p => p.pizzaID == order.Pizza.pizzaID);
                var myOrder = new Order()
                {
                    Date = DateTime.Now,
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
                IEnumerable<Order> orderEntities = _ctx.Order
                                                         .Include(c => c.Customer)
                                                         .Include(b => b.Pizza)
                                                         .ToList();
                IEnumerable<OrderViewModel> orders =
                    orderEntities
                    .Select(o =>
                         new OrderViewModel
                         {
                             OrderNumber = o.OrderNumber,
                             Date = o.Date,
                             Customer = o.Customer,
                             OrderStatus = o.OrderStatus,
                             Pizza = o.Pizza
                         });
                return orders;
            }
        }

        public OrderViewModel GetOrderById(Guid orderId)
        {
            var orderEnity = _ctx.Order
                                  .Where(o => o.OrderNumber == orderId)
                                  .Include(o => o.Customer)
                                  .Include(o => o.Pizza)
                                  .FirstOrDefault();
    
            var order = new OrderViewModel()
            {
                OrderNumber = orderEnity.OrderNumber,
                Date = orderEnity.Date,
                Customer = orderEnity.Customer,
                Pizza = orderEnity.Pizza,
                OrderStatus = orderEnity.OrderStatus,
                Quantity = orderEnity.Quantity
            };
            return order;
        }

        public OrderViewModel SetOrderStatus(OrderViewModel orderRequest)
        {

            var order = _ctx.Order
                              .Where(o => o.OrderNumber == orderRequest.OrderNumber)
                              .FirstOrDefault();
            if (order != null)
            {
                order.OrderStatus = orderRequest.OrderStatus;
                _ctx.SaveChanges();
            }

            var orderView = new OrderViewModel()
            {
                OrderNumber = order.OrderNumber,
                Date = order.Date,
                Customer = order.Customer,
                Pizza = order.Pizza,
                OrderStatus = order.OrderStatus,
                Quantity = order.Quantity
            };

            return orderView;
            
        }
    }
}