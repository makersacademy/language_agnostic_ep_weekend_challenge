using Microsoft.EntityFrameworkCore;
namespace Instagram.Models
{
    public class InstagramContext : DbContext
    {
        public InstagramContext(DbContextOptions<InstagramContext> options) : base(options)
        {
        }

        public DbSet<Post> posts { get; set; }
    }
}
