using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebBanDoCongNghe.DBContext;
using Newtonsoft.Json;
using WebBanDoCongNghe.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;

namespace WebBanDoCongNghe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public UserController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
       
        [HttpGet]
        public IActionResult getListUse()
        {
            var result = _context.Users.AsQueryable().
                 Select(d => new
                 {
                     id = d.Id,
                     name = d.UserName
                 }).ToList();
            return Json(result);
        }
    }
}
