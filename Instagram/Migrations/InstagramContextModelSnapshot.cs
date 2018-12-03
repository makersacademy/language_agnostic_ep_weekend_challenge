﻿// <auto-generated />
using System;
using Instagram.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Instagram.Migrations
{
    [DbContext(typeof(InstagramContext))]
    partial class InstagramContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Instagram.Models.Post", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Userid");

                    b.Property<string>("image");

                    b.HasKey("id");

                    b.HasIndex("Userid");

                    b.ToTable("posts");
                });

            modelBuilder.Entity("Instagram.Models.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("password");

                    b.Property<string>("username");

                    b.HasKey("id");

                    b.ToTable("users");
                });

            modelBuilder.Entity("Instagram.Models.Post", b =>
                {
                    b.HasOne("Instagram.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("Userid");
                });
#pragma warning restore 612, 618
        }
    }
}
