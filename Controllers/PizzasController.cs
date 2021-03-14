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
    [Route("api/pizza")]
    [ApiController]
    public class PizzasController : ControllerBase
    {

        private readonly ILogger<PizzasController> _logger;

        private readonly IPizzaRepository _repository;

        public PizzasController(ILogger<PizzasController> logger, IPizzaRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet("all")]
        public IEnumerable<PizzaViewModel> Get()
        {
            var pizzas = _repository.GetPizzas();

            return pizzas;
        }

        public PizzaViewModel GetPizzaById(Guid pizzaId)
        { 
            var pizza = _repository.GetPizzaById(pizzaId);

            return pizza;
        }

        [HttpPost]
        public PizzaViewModel Post([FromBody] PizzaViewModel  pizza)
        {
            return _repository.CreatePizza(pizza);
        }
    }
}
