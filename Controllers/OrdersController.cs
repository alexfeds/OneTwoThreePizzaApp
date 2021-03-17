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
    [Route("api/orders")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ILogger<OrdersController> _logger;

        private readonly IPizzaRepository _repository;

        public OrdersController(ILogger<OrdersController> logger, IPizzaRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet("all")]
        public IEnumerable<OrderViewModel> Get()
        {
            var orders = _repository.GetOrders();

            return orders;
        }

        [HttpPost]
        public OrderViewModel Post([FromBody] OrderViewModel order)
        {
            return _repository.CreateOrder(order);
        }
        public OrderViewModel GetOrderById(Guid orderId)
        {
            var order = _repository.GetOrderById(orderId);

            return order;
        }
    }
}
