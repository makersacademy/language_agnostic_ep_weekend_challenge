using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Instagram.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Instagram.Controllers
{
    public class PostController : Controller
    {
        private readonly InstagramContext _context;

        public PostController(InstagramContext context)
        {
            _context = context;
        }

        // GET: /<controller>/
        public ActionResult<List<Post>> Index()
        {
            ViewBag.Posts = _context.posts.ToList();
            return View();
        }
    }
}
