using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebBanDoCongNghe.DBContext;
using Newtonsoft.Json;
using WebBanDoCongNghe.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace WebBanDoCongNghe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class UserController : Controller
    {
        private readonly ProductDbContext _context;
        private readonly UserManager<UserManage> _userManager;
        private readonly SignInManager<UserManage> _signInManager;
        // GET: ProductController
        public UserController(ProductDbContext context, UserManager<UserManage> userManager,
            SignInManager<UserManage> signInManager)
        {
            _userManager = userManager;
            _context = context;
            _signInManager = signInManager;
        }

        // POST: ProductController/Create

        [HttpGet("getListUse")]
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
        [HttpGet("checkLogin")]
        public IActionResult checkLogin()
        {
            var result = User.Identity.IsAuthenticated;
            return Json(result);
        }
        [HttpPost("logout")]
        public async Task<IActionResult> logout()
        {
            await _signInManager.SignOutAsync();
            return Json("Logout successfully");
        }
        [HttpGet("getElementById/{id}")]
        public IActionResult getElementById([FromRoute] string id)
        {
            var model = _context.Users.AsQueryable().FirstOrDefault(m => m.Id == id); ;
            if (model == null)
            {
                return NotFound();
            }
            return Json(model);
        }
    }
}
