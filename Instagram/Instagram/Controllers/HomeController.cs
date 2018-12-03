using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Instagram.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Session;

namespace Instagram.Controllers
{
    public class HomeController : Controller
    {

        private readonly InstagramDatabase _database;
        private readonly IHostingEnvironment _environment;

        public HomeController(InstagramDatabase database, IHostingEnvironment environment)
        {
            _database = database;
            _environment = environment;
        }

        public IActionResult Index()
        {
            ViewBag.Username = HttpContext.Session.GetString("username");
            ViewBag.Posts = _database.posts.ToList();

            var posts =
                from p in _database.posts
                join u in _database.users
                on p.user_id equals u.id
                select new PostViewModel
                {
                    id = p.id,
                    image = p.image,
                    caption = p.caption,
                    username = u.username
                };

            ViewBag.NewPosts = posts;

            return View();
        }

        public IActionResult New()
        {
            ViewBag.Username = HttpContext.Session.GetString("username");

            if (ViewBag.Username == null)
            {
                Response.Redirect("Index");
            }

            return View();
        }

        public async void Create(IFormFile file, string caption)
        {
            string fileName = file.FileName;

            int id = HttpContext.Session.GetInt32("id") ?? default(int);

            _database.posts.Add(new Post { image = fileName, caption = caption, user_id = id });
            _database.SaveChanges();

            var uploads = Path.Combine(_environment.WebRootPath, "images");

            var filePath = Path.Combine(uploads,fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

            Response.Redirect("Index");
        }

        [HttpPost]
        public void Delete(int id)
        {
            var post = _database.posts.Find(id);
            _database.Remove(post);
            _database.SaveChanges();
            Response.Redirect("../Index");
        }

        public IActionResult Read(int id)
        {
            ViewBag.Username = HttpContext.Session.GetString("username");
            ViewBag.UserID = HttpContext.Session.GetInt32("id");
            ViewBag.Post = _database.posts.Find(id);
            if (ViewBag.Post == null)
            {
                return NotFound();
            }
            return View();
        }
    }
}
