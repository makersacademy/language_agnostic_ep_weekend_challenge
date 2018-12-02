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
            ViewBag.Posts = _database.posts.ToList();
            return View();
        }

        public IActionResult New()
        {
            return View();
        }

        public async void Create(IFormFile file)
        {
            string fileName = file.FileName;

            _database.posts.Add(new Post { image = fileName });
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
            ViewBag.Post = _database.posts.Find(id);
            if (ViewBag.Post == null)
            {
                return NotFound();
            }
            return View();
        }
    }
}
