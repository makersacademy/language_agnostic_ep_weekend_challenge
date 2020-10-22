using System;

namespace Instagram.Models
{
    public class Post
    {
        public int id { get; set; }
        public string image { get; set; }
        public User user { get; set; }
    }
}
