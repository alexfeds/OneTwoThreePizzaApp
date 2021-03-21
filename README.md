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
* set your SQL server database go to config.json and change Server=(localdb)\\ProjectsV13; to your local address

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
This will install and set up your database. Now you can set the project as a start up project in visual sudio, press play IIS express button and it should start the asp.core app, if all went fine you should see an empty page [], url `http://localhost:21454/api/customers`.
Now you can switch to Angular app and start playing with pizza management app. Enjoy)

## Stack

* A RESTful API, supporting HTTP and JSON and using ASP.NET Core 3.1;
*  A service layer;
* The Model/Entity layer that handles all interaction with the database;
*  Angular 11;
*  ASP.NET Core 3.1;
* PrimeNG 11;
*  Entity Framework Core 3.1;
*  A SQL Server 3.1;


## Features
* Create an order;
*  Create pizzas;
* Add customers;
*  Manage orders (status update e.g. Preparation/Delivered);
*  List: Order, Customers, Pizzas;

Pizza Express management system. There are several types of pizza, and each type
has name, description (short description) and a price. A customer can make an order. Every
order contains an order code, the customer and the ordered pizza (with quantity). Each
client has name, address (only one string) and phone. Each order has a status (registered,
preparation, ready to be delivered, delivered).

**Prerequisites:** [.NET Core 3.1](https://dot.net/core) and [Node.js](https://nodejs.org/).


## License

MIT, see [LICENSE](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt).

