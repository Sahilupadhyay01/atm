using atmapi.Models;
using Microsoft.EntityFrameworkCore;

namespace atmapi.Data
{
    public class BankingDbContext : DbContext
    {
        public BankingDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<CustomerData> CustomersData { get; set; }
        

    }
}
