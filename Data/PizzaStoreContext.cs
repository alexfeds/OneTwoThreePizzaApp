using Microsoft.EntityFrameworkCore;
using OneTwoThreePizzaApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaApp.Data
{
    public class PizzaStoreContext : DbContext
    {
        public PizzaStoreContext(DbContextOptions<PizzaStoreContext> options):base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Order { get; set; }

    }
}
