using WebBanDoCongNghe.DBContext;
using WebBanDoCongNghe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace WebBanDoCongNghe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class CommentController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public CommentController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
        [Authorize]
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Comment>(json.GetValue("data").ToString());
            model.id = Guid.NewGuid().ToString().Substring(0, 10);
            model.date= DateTime.Now;
            _context.Comments.Add(model);
            //var product=_context.Products.;
            _context.SaveChanges();
            return Json(model);
        }


        // POST: CommentController/Edit/5
        [Authorize]
        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Comment>(json.GetValue("data").ToString());
            _context.Comments.Update(model);
            _context.SaveChanges();
            return Json(model);
        }

        // POST: CommentController/Delete/5
        [Authorize]
        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Comments.SingleOrDefault(p => p.id == id);
            var like = _context.CommentLikes.AsQueryable().Where(p => p.idComment == id).ToList();
            if (like != null)
            {
                foreach(var item in like)
                {
                    _context.CommentLikes.Remove(item);
                }
            }
            _context.Comments.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet("getListUse/{productId}")]
        public IActionResult getListUse([FromBody] string productId)
        {
            var result = _context.Comments.AsQueryable().Where(x=>x.productId == productId).
                 Select(d => new
                 {
                     id = d.id,
                     content = d.content,
                     userId= d.userId,
                     likes=_context.CommentLikes.AsQueryable().Where(x=>x.idComment==d.id).ToList().Count(),
                 }).ToList();
            return Json(result);
        }
        [Authorize]
        [HttpPost("likeComment")]
        public IActionResult likeComment([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<CommentLike>(json.GetValue("data").ToString());
            _context.CommentLikes.Add(model);
            _context.SaveChanges();
            return Json(model);
        }
        [Authorize]
        [HttpPost("deleteLike/{id}")]
        public ActionResult deleteLike([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.CommentLikes.SingleOrDefault(p => p.id == id);
            _context.CommentLikes.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
    }
}
