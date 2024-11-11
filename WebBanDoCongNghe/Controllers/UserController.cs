using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebBanDoCongNghe.DBContext;
using Newtonsoft.Json;
using WebBanDoCongNghe.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using WebBanDoCongNghe.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using WebBanDoCongNghe.Interface;

namespace WebBanDoCongNghe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class UserController : Controller
    {
        private readonly ProductDbContext _context;
        private readonly UserManager<UserManage> _userManager;
        private readonly SignInManager<UserManage> _signInManager;
        private readonly ITokenService _tokenService;
        // GET: ProductController
        public UserController(ProductDbContext context, UserManager<UserManage> userManager,
            SignInManager<UserManage> signInManager, ITokenService tokenService)
        {
            _userManager = userManager;
            _context = context;
            _signInManager = signInManager;
            _tokenService = tokenService;
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
        [HttpGet("getElement")]
        public IActionResult getElement()
        {
            string userId = _userManager.GetUserId(HttpContext.User);
            var model = _context.Users.AsQueryable().Where(m => m.Id == userId)
                .Select(d => new
                {
                    d.Id,
                    d.AccountName,
                    d.Email,
                    d.birthDate,
                    d.Address,
                }) ; 
            if (model == null)
            {
                return NotFound();
            }
            return Json(model);
        }
        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterDTO model)
        {
            if (ModelState.IsValid)
            {
                var user = new UserManage
                {
                    UserName = model.Email,   // Hoặc có thể để là một giá trị khác nếu không muốn dùng Email làm UserName
                    Email = model.Email,
                    AccountName = model.AccountName
                };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    // Thêm các logic bổ sung nếu cần thiết (ví dụ: gửi email xác thực, v.v.)
                    return Json(user);
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            return BadRequest(ModelState);
        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDTO model)
        {
            if (ModelState.IsValid)
            {
                // Tìm người dùng qua AccountName hoặc Email
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user == null)
                {
                    user = await _userManager.Users
                        .FirstOrDefaultAsync(u => u.AccountName == model.Email);
                }

                if (user != null)
                {
                    var result = await _signInManager.PasswordSignInAsync(user.UserName, model.Password, isPersistent: false, lockoutOnFailure: false);
                    if (result.Succeeded)
                    {
                       
                        var response = new
                        {
                            Token = _tokenService.CreateToken(user),
                            User = new
                            {
                                user.UserName,
                                user.Email,
                                user.Id
                            }
                        };

                        return Ok(response);
                    }
                    else
                    {
                        return Unauthorized("Mật khẩu không đúng.");
                    }
                }

                return NotFound("Người dùng không tồn tại.");
            }

            return BadRequest(ModelState);
        }
    }
}
