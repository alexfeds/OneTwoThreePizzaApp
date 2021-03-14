using OneTwoThreePizzaApp.Data.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace OneTwoThreePizzaApp
{
    public class Pizza
    {
        [Key]
        public Guid pizzaID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
    }
}
