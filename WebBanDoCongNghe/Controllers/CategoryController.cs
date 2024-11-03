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
    public class CategoriesController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public CategoriesController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Category>(json.GetValue("data").ToString());
            _context.Categories.Add(model);
            _context.SaveChanges();
            return Json(model);
        }


        // POST: CategoryController/Edit/5
        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Category>(json.GetValue("data").ToString());
            _context.Categories.Update(model);
            _context.SaveChanges();
            return Json(model);
        }

        // POST: CategoryController/Delete/5
        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Categories.SingleOrDefault(p => p.id == id);
            _context.Categories.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet]
        public IActionResult getListUse()
        {
            var result = _context.Categories.AsQueryable().
                 Select(d => new
                 {
                     id = d.id,
                     name = d.name
                 }).ToList();
            return Json(result);
        }
    }
}
