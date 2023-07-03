using HeathCare.Models;
using Microsoft.EntityFrameworkCore;


namespace HeathCare.Data
{
    public class HeathCareDbContext : DbContext
    {
        public HeathCareDbContext(DbContextOptions<HeathCareDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Doctor> Doctor { get; set; }

        public DbSet<Appointment> Appointments { get; set; }
    }
}