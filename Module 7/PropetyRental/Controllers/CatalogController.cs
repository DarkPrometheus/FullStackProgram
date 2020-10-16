using Microsoft.AspNetCore.Mvc;

namespace PropetyRental.Controllers
{
    public class CatalogController :  Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public IActionResult Register()
        {
            return View();
        }
    }
}