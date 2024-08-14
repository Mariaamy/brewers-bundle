using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class BrewersBundleDbContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; init; }
        public BrewersBundleDbContext(DbContextOptions<BrewersBundleDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Recipe>();
        }
    }
}