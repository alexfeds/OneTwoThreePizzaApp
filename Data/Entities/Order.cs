using OneTwoThreePizzaApp.Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaApp.Data.Entities
{
    public class Order
    {
        [Key]
        public Guid OrderNumber { get; set; }     
        public DateTime Date { get; set; }
        public Customer Customer { get; set; }
        public Pizza Pizza { get; set; }
        public OrderSatus OrderStatus { get; set; }
        public int Quantity { get; set; }
    }
}
