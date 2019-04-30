using HebertApp.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace HebertApp.API.DataAccess {
    public class JobConfig : IEntityTypeConfiguration<Job>
    {
        public void Configure(EntityTypeBuilder<Job> builder)
        {
            builder.ToTable("Job");
            builder.HasKey(p => p.id);

            builder.Property(x => x.id).HasColumnName("id").HasColumnType("INTEGER").IsRequired();
            builder.Property(x => x.dateDebut).HasColumnName("dateDebut").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.dateFin).HasColumnName("dateFin").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.cheminShp).HasColumnName("cheminShp").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.parametres).HasColumnName("parametres").HasColumnType("TEXT");
            builder.Property(x => x.statut).HasColumnName("statut").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.chemin).HasColumnName("chemin").HasColumnType("TEXT").IsRequired();
            builder.Property(x => x.shp).HasColumnName("shp").HasColumnType("TEXT").IsRequired();
        }
    }
}