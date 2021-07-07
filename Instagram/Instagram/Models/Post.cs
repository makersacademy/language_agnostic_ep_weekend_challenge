using System;
namespace Instagram.Models
{
    public class Post
    {
            public int id { get; set; }
            public string image { get; set; }
            public string caption { get; set; }
            public int user_id { get; set; }
            public DateTime datetime { get; set; }
    }
}
