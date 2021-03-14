using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OneTwoThreePizzaApp.Data;
using OneTwoThreePizzaStore.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OneTwoThreePizzaApp.Controllers
{
    [Route("api/customers")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
     

        private readonly ILogger<CustomersController> _logger;

        private readonly IPizzaRepository _repository;

        public CustomersController(ILogger<CustomersController> logger, IPizzaRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<CustomerViewModel> Get()
        {
            var customers = _repository.GetCustomers();

            return customers;
        }

        [HttpPost]
        public CustomerViewModel Post([FromBody] CustomerViewModel customer)
        {
           

            return _repository.CreateCustomer(customer);
        }
    }

}
