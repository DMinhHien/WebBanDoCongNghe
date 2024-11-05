using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebBanDoCongNghe.DBContext;
using Newtonsoft.Json;
using WebBanDoCongNghe.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Authorization;
using System.Net.WebSockets;
using System.Security.Claims;
namespace WebBanDoCongNghe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class CartController : Controller
    {
        private readonly ProductDbContext _context;
       
        public CartController(ProductDbContext context)
        {
            _context = context;
        }

     
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Cart>(json.GetValue("data").ToString());
            model.id = Guid.NewGuid().ToString().Substring(0, 10);
            _context.Carts.Add(model);
            _context.SaveChanges();
            return Json(model);
        }



        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Cart>(json.GetValue("data").ToString());
            _context.Carts.Update(model);
            _context.SaveChanges();
            return Json(model);
        }
        [HttpPost("editCartDetail")]
        public ActionResult EditCartDetail([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<CartDetail>(json.GetValue("data").ToString());
            _context.CartDetails.Update(model);
            _context.SaveChanges();
            return Json(model);
        }


        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Carts.SingleOrDefault(p => p.id == id);
            _context.Carts.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet("getListUse")]
        public IActionResult getListUse()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = _context.Carts
                .Where(x => x.userId == userId)
                .Select(cart => new
                {
                    cart.id,
                    cart.userId,
                    CartDetails = _context.CartDetails
                        .Where(rd => rd.idCart == cart.id)
                        .Select(rd => new
                        {
                            rd.id,
                            rd.idProduct,
                            rd.quantity,
                            Product = _context.Products.Where(p => p.id == rd.idProduct)
                            .Select(p => new
                            {
                                p.id,
                                p.productName,
                                p.unitPrice,
                                p.idShop,
                                Shop=_context.Shops.Where(s => s.id == p.idShop)
                                 .Select(p => new
                                 {
                                     p.name,
                                     p.image
                                 }).FirstOrDefault()
                            }).FirstOrDefault()
                        }).ToList()
                }).ToList();
            return Json(result);
        }
        [HttpPost("addCartProduct")]
        public IActionResult addCartProduct([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<CartDetail>(json.GetValue("data").ToString());
            _context.CartDetails.Add(model);
            _context.SaveChanges();
            return Json(model);
        }
    }
}
