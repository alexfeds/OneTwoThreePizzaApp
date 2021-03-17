using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OneTwoThreePizzaApp.Migrations
{
    public partial class InitialDb2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustID = table.Column<Guid>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<int>(nullable: false),
                    StreetName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustID);
                });

            migrationBuilder.CreateTable(
                name: "Pizza",
                columns: table => new
                {
                    pizzaID = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Price = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pizza", x => x.pizzaID);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    OrderNumber = table.Column<Guid>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    CustomerCustID = table.Column<Guid>(nullable: true),
                    pizzaID = table.Column<Guid>(nullable: true),
                    OrderStatus = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.OrderNumber);
                    table.ForeignKey(
                        name: "FK_Order_Customers_CustomerCustID",
                        column: x => x.CustomerCustID,
                        principalTable: "Customers",
                        principalColumn: "CustID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Order_Pizza_pizzaID",
                        column: x => x.pizzaID,
                        principalTable: "Pizza",
                        principalColumn: "pizzaID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Order_CustomerCustID",
                table: "Order",
                column: "CustomerCustID");

            migrationBuilder.CreateIndex(
                name: "IX_Order_pizzaID",
                table: "Order",
                column: "pizzaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Pizza");
        }
    }
}
