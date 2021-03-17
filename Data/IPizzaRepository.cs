using OneTwoThreePizzaStore.Data.Models;
using System;
using System.Collections.Generic;

namespace OneTwoThreePizzaApp.Data
{
    public interface IPizzaRepository
    {
        CustomerViewModel CreateCustomer(CustomerViewModel customer);
        OrderViewModel CreateOrder(OrderViewModel order);
        PizzaViewModel CreatePizza(PizzaViewModel pizza);
        IEnumerable<CustomerViewModel> GetCustomers();
        OrderViewModel GetOrderById(Guid orderId);
        IEnumerable<OrderViewModel> GetOrders();
        PizzaViewModel GetPizzaById(Guid pizzaId);
        IEnumerable<PizzaViewModel> GetPizzas();
        OrderViewModel SetOrderStatus(OrderViewModel order);
    }
}