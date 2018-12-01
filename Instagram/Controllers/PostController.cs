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
        public ActionResult Index()
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
        public ActionResult Create(string content)
        {
            _context.posts.Add(new Post { content = content });
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Destroy(int id)
        {
            _context.posts.Remove(_context.posts.Find(id));
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult Edit(int id)
        {
            ViewBag.Post = _context.posts.Find(id);
            return View();
        }

        [HttpPost]
        public ActionResult Update(string content, int id)
        {
            Post post = _context.posts.Find(id);
            post.content = content;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
