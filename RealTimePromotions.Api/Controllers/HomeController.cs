using Microsoft.AspNetCore.Mvc;

namespace RealTimePromotions.Api.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Subscribe()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult List()
        {
            return View();
        }
    }
}
