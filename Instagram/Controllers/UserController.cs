using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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

        public IActionResult New()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(string username, string password)
        {
            var result = _context.users.SingleOrDefault(x => x.username == username);
            if (result == null)
            {
                _context.users.Add(new User { username = username, password = password });
                _context.SaveChanges();
                return Redirect("https://localhost:5001/");
            }
            else
            {
                TempData["Message"] = "User already exists.";
                return RedirectToAction("New");
            }
        }

        [HttpGet]
        public IActionResult SignIn()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AuthenticateSignIn(string username, string password)
        {
            var result = _context.users.SingleOrDefault(x => x.username == username);
            if (result != null && result.password == password)
            {
                HttpContext.Session.SetString("username", result.username);
                return Redirect("https://localhost:5001/");
            }
            else
            {
                TempData["Message"] = "Login credentials are incorrect.";
                return RedirectToAction("SignIn");
            }
        }

        public IActionResult SignOut()
        {
            HttpContext.Session.Clear();
            return Redirect("https://localhost:5001/");
        }
    }
}
