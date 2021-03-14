using System.Collections.Generic;

namespace OneTwoThreePizzaApp.Data
{
    public interface IPizzaRepository
    {
        IEnumerable<Customer> GetCustomers();
    }
}