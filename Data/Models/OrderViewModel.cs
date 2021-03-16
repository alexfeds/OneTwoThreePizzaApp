using OneTwoThreePizzaApp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaStore.Data.Models
{
    public class OrderViewModel
    {
        public int OrderNumber { get; set; }

        public string Type { get; set; }

        public DateTime Date { get; set; }

        public Customer Customer { get; set; }

        public Guid PizzaID { get; set; }
    }
}
