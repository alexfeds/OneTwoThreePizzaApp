using OneTwoThreePizzaStore.Data;
using OneTwoThreePizzaStore.Data.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace OneTwoThreePizzaStore
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
