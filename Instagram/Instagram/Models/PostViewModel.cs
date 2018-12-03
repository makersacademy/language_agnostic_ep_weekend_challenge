using System;
namespace Instagram.Models
{
    public class PostViewModel
    {
        public int id { get; set; }
        public string image { get; set; }
        public string caption { get; set; }
        public string username { get; set; }
        public DateTime datetime { get; set; }
    }
}
