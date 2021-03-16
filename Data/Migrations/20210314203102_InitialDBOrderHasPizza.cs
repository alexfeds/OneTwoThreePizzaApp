using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OneTwoThreePizzaApp.Migrations
{
    public partial class InitialDBOrderHasPizza : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
        }
    }
}
