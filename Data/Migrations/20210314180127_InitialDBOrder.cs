using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OneTwoThreePizzaApp.Migrations
{
    public partial class InitialDBOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_Order_OrderNumber",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_Customers_OrderNumber",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "OrderNumber",
                table: "Customers");

            migrationBuilder.AddColumn<Guid>(
                name: "CustomerCustID",
                table: "Order",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_CustomerCustID",
                table: "Order",
                column: "CustomerCustID");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Customers_CustomerCustID",
                table: "Order",
                column: "CustomerCustID",
                principalTable: "Customers",
                principalColumn: "CustID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Customers_CustomerCustID",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_CustomerCustID",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "CustomerCustID",
                table: "Order");

            migrationBuilder.AddColumn<int>(
                name: "OrderNumber",
                table: "Customers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Customers_OrderNumber",
                table: "Customers",
                column: "OrderNumber");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_Order_OrderNumber",
                table: "Customers",
                column: "OrderNumber",
                principalTable: "Order",
                principalColumn: "OrderNumber",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
