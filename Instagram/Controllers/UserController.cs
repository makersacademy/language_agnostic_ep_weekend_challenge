using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Instagram.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Instagram.Controllers
{
    public class UserController : Controller
    {
        private readonly InstagramContext _context;

        public UserController(InstagramContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult New()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(string username, string password)
        {
            _context.users.Add(new User { username = username, password = password });
            _context.SaveChanges();
            return Redirect("https://localhost:5001/");
        }
    }
}
