using WebBanDoCongNghe.DBContext;
using WebBanDoCongNghe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace WebBanDoCongNghe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommentController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public CommentController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Comment>(json.GetValue("data").ToString());
            _context.Comments.Add(model);
            _context.SaveChanges();
            return Json(model);
        }


        // POST: CommentController/Edit/5
        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Comment>(json.GetValue("data").ToString());
            _context.Comments.Update(model);
            _context.SaveChanges();
            return Json(model);
        }

        // POST: CommentController/Delete/5
        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Comments.SingleOrDefault(p => p.id == id);
            _context.Comments.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet]
        public IActionResult getListUse()
        {
            var result = _context.Comments.AsQueryable().
                 Select(d => new
                 {
                     id = d.id,
                     content = d.content
                 }).ToList();
            return Json(result);
        }
    }
}
