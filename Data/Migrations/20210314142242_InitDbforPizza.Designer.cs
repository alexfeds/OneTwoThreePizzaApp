﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OneTwoThreePizzaApp.Data;

namespace OneTwoThreePizzaApp.Migrations
{
    [DbContext(typeof(PizzaStoreContext))]
    [Migration("20210314142242_InitDbforPizza")]
    partial class InitDbforPizza
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("OneTwoThreePizzaApp.Customer", b =>
                {
                    b.Property<Guid>("CustID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("OrderNumber")
                        .HasColumnType("int");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("int");

                    b.Property<string>("StreetName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CustID");

                    b.HasIndex("OrderNumber");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("OneTwoThreePizzaApp.Data.Entities.Order", b =>
                {
                    b.Property<int>("OrderNumber")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("OrderNumber");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("OneTwoThreePizzaApp.Pizza", b =>
                {
                    b.Property<Guid>("pizzaID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.HasKey("pizzaID");

                    b.ToTable("Pizza");
                });

            modelBuilder.Entity("OneTwoThreePizzaApp.Customer", b =>
                {
                    b.HasOne("OneTwoThreePizzaApp.Data.Entities.Order", null)
                        .WithMany("Customers")
                        .HasForeignKey("OrderNumber");
                });
#pragma warning restore 612, 618
        }
    }
}