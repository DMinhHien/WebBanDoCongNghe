﻿using Microsoft.AspNetCore.Http;
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
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ITokenService _tokenService;
        // GET: ProductController
        public UserController(ProductDbContext context, UserManager<UserManage> userManager,
            SignInManager<UserManage> signInManager, ITokenService tokenService, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _context = context;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _roleManager = roleManager;
        }

        // POST: ProductController/Create
        [HttpPost("addRole")]
        public async Task<IActionResult> AddRole([FromBody] JObject json)
        {
            var userId = json.GetValue("userId")?.ToString();
            var roleName = json.GetValue("roleName")?.ToString();

            if (userId == null || roleName == null)
                return BadRequest("User ID or role name is missing.");

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
                return NotFound("User not found.");

            if (!await _roleManager.RoleExistsAsync(roleName))
                return NotFound("Role not found.");

            var result = await _userManager.AddToRoleAsync(user, roleName);
            if (!result.Succeeded)
                return BadRequest(result.Errors);

            return Json(user);
        }
        [HttpGet("getListUse")]
        public async Task<IActionResult> getListUseAsync()
        {
            var users = _context.Users.ToList(); // Lấy tất cả người dùng
            var result = new List<object>();

            foreach (var user in users)
            {
                var roles = await _userManager.GetRolesAsync(user); // Lấy vai trò
                result.Add(new
                {
                    id = user.Id,
                    name = user.UserName,
                    role = roles.Any() ? roles : new List<string>() // Trả về danh sách rỗng nếu không có vai trò
                });
            }

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
