using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http;
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

        [HttpGet]
        public ActionResult<List<Post>> Index()
        {
            ViewBag.Posts = _context.posts.ToList();
            return View();
        }

        [HttpGet]
        public ActionResult New()
        {
            return View();
        }

        [HttpPost]
        public void Create(string content)
        {
            _context.posts.Add(new Post { content = content });
            _context.SaveChanges();
            Response.Redirect("https://localhost:5001/");
        }
    }
}
