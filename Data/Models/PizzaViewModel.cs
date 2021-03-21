using OneTwoThreePizzaApp;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaStore.Data.Models
{
    public class PizzaViewModel
    {
        public Guid pizzaID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Price { get; set; }
    }
}
