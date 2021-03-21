# Pizza Express Management system in ASP.NET Core 3.0 API with Angular 11, Prime NG 11, Entity Framework Core

This example shows how to build a pizza management system app with an ASP.NET Core 3 backend API and Angular 11 frontend, Entity Framework and SQL Server to store the real data.

* [Getting started](#getting-started)
* [Stack](#stack)
* [Features](#features)
* [License](#license)


## Getting started

To install this application, run the following commands:

#### Client configuration

```bash
 OneTwoThreePizzaApp\ClientApp npm i --save
 OneTwoThreePizzaApp\ClientApp npm build
 OneTwoThreePizzaApp\ClientApp ng serve --watch
```

This will install all packages needed for Angular and will start the server at `http://localhost:4200/`.

#### Server configuration
* restore nugget packages from within visual studio
* set your SQL server aatabase  go to config,json and change Server=(localdb)\\ProjectsV13; to your local address

```json
{
  "ConnectionStrings": {
    "PizzaConnectionString": "Server=(localdb)\\ProjectsV13; Database=PizzaStoreDB; Trusted_Connection=True; Integrated Security=true; MultipleActiveResultSets=true"
  }
}
```
* do migrations to set up your database 
```bash
OneTwoThreePizzaApp> dotnet tool install dotnet-ef -g
OneTwoThreePizzaApp> dotnet ef database update
OneTwoThreePizzaApp> dotnet ef migartions add InitialDb
OneTwoThreePizzaApp> dotnet ef database update
```
This will install set up your database

## Stack

* A RESTful API, supporting HTTP and JSON and using ASP.NET Core 3.1;
*  A service layer;
* The Model/Entity layer that handles all interaction with the database;
*  Angular 11
*  ASP.NET Core 3.1
* PrimeNG 11
*  Entity Framework Core
*  A SQL Database


## Features
* Create an order
*  Create pizzas
* Add customers
*  Manage orders (status update e.g. Preparation/Delivered)
*  List: Order, Customers, Pizzas

**Prerequisites:** [.NET Core 3.0](https://dot.net/core) and [Node.js](https://nodejs.org/).


## License

Apache 2.0, see [LICENSE](LICENSE).

