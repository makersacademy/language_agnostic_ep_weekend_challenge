using Microsoft.EntityFrameworkCore;
using System;

namespace Instagram.Models
{
    public class InstagramDatabase : DbContext
    {
        public InstagramDatabase(DbContextOptions<InstagramDatabase> options) : base(options)
        {
        }

        public DbSet<Post> posts { get; set; }
    }
}
