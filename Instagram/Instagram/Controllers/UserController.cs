using System;
using System.IO;
using System.Text;
using System.Security.Cryptography;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http;
using Instagram.Models;

namespace Instagram.Controllers
{
    public class UserController : Controller
    {

        private readonly InstagramDatabase _database;

        public UserController(InstagramDatabase database)
        {
            _database = database;
        }

        public IActionResult New()
        {
            ViewBag.Message = TempData["FlashMessage"];
            return View();
        }

        [HttpPost]
        public void Create(string username, string password)
        {
            var user = _database.users.SingleOrDefault(c => c.username == username);
            if (user != null)
            {
                TempData["FlashMessage"] = "Username already in use";
                Response.Redirect("New");
            }
            else
            {
                _database.users.Add(new User { username = username, password = password });
                _database.SaveChanges();
                HttpContext.Session.SetString("username", username);
                Response.Redirect("../Home");
            }
        }

        [HttpGet]
        public IActionResult SignIn()
        {
            ViewBag.Message = TempData["FlashMessage"];
            return View();

        }

        [HttpPost]
        public void SignIn(string username, string password)
        {
            var user = _database.users.SingleOrDefault(c => c.username == username);
            if (user != null)
            {
                HttpContext.Session.SetString("username", username);
                Response.Redirect("../Home");
            }
            else
            {
                TempData["FlashMessage"] = "Username and password do not match";
                Response.Redirect("https://localhost:5001/User/SignIn");
            }
        }

        public void SignOut()
        {
            HttpContext.Session.Clear();
            Response.Redirect("../Home");
        }
    }
}