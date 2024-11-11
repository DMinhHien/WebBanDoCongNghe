using WebBanDoCongNghe.DBContext;
using WebBanDoCongNghe.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace WebBanDoCongNghe.Controllers
{
    [ApiController]
    [Route("[controller]")]
 
    public class ReceiptController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public ReceiptController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var receipt = new Receipt();
            var receiptDetailsJson = json.GetValue("data");
            var receiptDetails = JsonConvert.DeserializeObject<List<ReceiptDetail>>(receiptDetailsJson.ToString());
            receipt.id = Guid.NewGuid().ToString().Substring(0, 10);
            receipt.userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            receipt.date = DateTime.Now;
            _context.Receipts.Add(receipt);
            foreach (var detail in receiptDetails)
            {
                detail.id = Guid.NewGuid().ToString(); 
                detail.idReceipt = receipt.id;          
                _context.ReceiptDetails.Add(detail);
            }
            _context.SaveChanges();
            return Json(receipt);
        }


        // POST: ReceiptController/Edit/5
        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Receipt>(json.GetValue("data").ToString());
            _context.Receipts.Update(model);
            _context.SaveChanges();
            return Json(model);
        }

        // POST: ReceiptController/Delete/5
        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Receipts.SingleOrDefault(p => p.id == id);
            _context.Receipts.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet("getListUse")]
        public IActionResult getListUse()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = _context.Receipts
                .Where(x => x.userId == userId)
                .Select(receipt => new
                {
                    receipt.id,
                    receipt.date,
                    receipt.userId,
                    ReceiptDetails = _context.ReceiptDetails
                        .Where(rd => rd.idReceipt == receipt.id)
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
                                p.unitPrice
                            }).FirstOrDefault()
                }).ToList()
                }).ToList();
            return Json(result);
        }
        [HttpGet("getListUseShop")]
        public IActionResult getListUseShop([FromBody] JObject json)
        {
            var shopId = json.GetValue("id").ToString();

            // Truy vấn các ReceiptDetail cho các sản phẩm thuộc shopId
            var result = _context.ReceiptDetails
                .Where(rd => _context.Products
                    .Any(p => p.id == rd.idProduct && p.idShop == shopId)) // Chỉ lấy ReceiptDetail có Product thuộc shopId
                .Select(receiptDetail => new
                {
                    receiptDetail.idProduct,
                    receiptDetail.quantity,
                    receiptDetail.idReceipt,
                    // Lấy thông tin Receipt liên quan
                    Receipt = _context.Receipts
                        .Where(r => r.id == receiptDetail.idReceipt)
                        .Select(r => new
                        {
                            r.userId,
                            r.date
                        }).FirstOrDefault(),
                    // Lấy thông tin Product
                    Product = _context.Products
                        .Where(p => p.id == receiptDetail.idProduct && p.idShop == shopId)
                        .Select(p => new
                        {
                            p.id,
                            p.productName,
                            p.unitPrice
                        }).FirstOrDefault()
                }).ToList();

            return Json(result);
        }
    }
}
