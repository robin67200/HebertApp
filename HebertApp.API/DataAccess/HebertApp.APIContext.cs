using HebertApp.API.DataAccess;
using Microsoft.EntityFrameworkCore;
using HebertApp.API.Models;

namespace HebertApp.API.Models
{
    public class HebertAppAPIContext : DbContext
    {
        public HebertAppAPIContext (DbContextOptions<HebertAppAPIContext> options)
            : base(options)
        {
        }

        public DbSet<HebertApp.API.Models.Job> Jobs {get; set;}


        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new JobConfig());
        }
    }
}

