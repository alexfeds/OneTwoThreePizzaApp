using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaApp.Data.Entities
{
    public class Order
    {
        [Key]
        public int OrderNumber { get; set; }
        
        public string Type { get; set; }

        public DateTime Date { get; set; }

        public ICollection<Customer> Customers { get; set; }

    }
}
