using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Instagram.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Instagram.Controllers
{
    public class PostController : Controller
    {

        private readonly InstagramContext _context;
        private IHostingEnvironment _hostingEnvironment;

        public PostController(InstagramContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.User = HttpContext.Session.GetString("username");
            ViewBag.Posts = _context.posts.ToList();
            return View();
        }

        [HttpGet]
        public ActionResult New()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(IFormFile file)
        {
            //string newPath = "/images";
            string newPath = Path.Combine(_hostingEnvironment.WebRootPath, "upload");
            string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            string fullPath = Path.Combine(newPath, fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            _context.posts.Add(new Post { image = "/upload/" + fileName });
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
            ViewBag.User = HttpContext.Session.GetString("username");
            ViewBag.Post = _context.posts.Find(id);
            return View();
        }

        [HttpPost]
        public ActionResult Update(IFormFile file, int id)
        {
            string newPath = Path.Combine(_hostingEnvironment.WebRootPath, "upload");
            string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            string fullPath = Path.Combine(newPath, fileName);
            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            Post post = _context.posts.Find(id);
            post.image = "/upload/" + fileName;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
