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

        public IEnumerable<Customer> GetCustomers()
        {
            return _ctx.Customers;
        }
    }
}
