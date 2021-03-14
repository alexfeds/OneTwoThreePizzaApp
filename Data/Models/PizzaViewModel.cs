using OneTwoThreePizzaApp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaStore.Data.Models
{
    public class PizzaViewModel
    {
        public Guid pizzaID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
    }
}
