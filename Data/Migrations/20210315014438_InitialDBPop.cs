using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OneTwoThreePizzaApp.Migrations
{
    public partial class InitialDBPop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pizza_Order_OrderNumber",
                table: "Pizza");

            migrationBuilder.DropIndex(
                name: "IX_Pizza_OrderNumber",
                table: "Pizza");

            migrationBuilder.DropColumn(
                name: "OrderNumber",
                table: "Pizza");

            migrationBuilder.AddColumn<Guid>(
                name: "pizzaID",
                table: "Order",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_pizzaID",
                table: "Order",
                column: "pizzaID");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Pizza_pizzaID",
                table: "Order",
                column: "pizzaID",
                principalTable: "Pizza",
                principalColumn: "pizzaID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Pizza_pizzaID",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_pizzaID",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "pizzaID",
                table: "Order");

            migrationBuilder.AddColumn<int>(
                name: "OrderNumber",
                table: "Pizza",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pizza_OrderNumber",
                table: "Pizza",
                column: "OrderNumber");

            migrationBuilder.AddForeignKey(
                name: "FK_Pizza_Order_OrderNumber",
                table: "Pizza",
                column: "OrderNumber",
                principalTable: "Order",
                principalColumn: "OrderNumber",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
