using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Instagram.Models;

namespace Instagram.Controllers
{
    public class HomeController : Controller
    {

        private readonly InstagramDatabase _database;

        public HomeController(InstagramDatabase database)
        {
            _database = database;
        }

        public IActionResult Index()
        {
            ViewBag.Posts = _database.posts.ToList();
            return View();
        }
    }
}
