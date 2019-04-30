using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HebertApp.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Job",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    dateDebut = table.Column<DateTime>(type: "TEXT", nullable: false),
                    dateFin = table.Column<DateTime>(type: "TEXT", nullable: false),
                    cheminShp = table.Column<string>(type: "TEXT", nullable: false),
                    parametres = table.Column<string>(type: "TEXT", nullable: true),
                    statut = table.Column<string>(type: "TEXT", nullable: false),
                    chemin = table.Column<string>(type: "TEXT", nullable: false),
                    shp = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Job", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Job");
        }
    }
}
