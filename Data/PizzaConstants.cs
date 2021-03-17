using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaApp.Data.Models
{
    public enum OrderSatus : int
    {
        Registered = 1,
        Preparation = 2,
        ReadyToDeliver = 3, 
        Delivered = 4
    }
}
