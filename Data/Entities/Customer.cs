using OneTwoThreePizzaApp.Data.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace OneTwoThreePizzaApp
{
    public class Customer 
    {
        [Key]
        public Guid CustID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int PhoneNumber { get; set; }
        public string StreetName { get; set; }
    }
}
