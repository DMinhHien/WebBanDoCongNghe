using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BTTHUCHANH.Models
{
    [Table("Product")]
    public class Product
    {
        [Key]
        public string id { get; set; }
        public string productName {  get; set; }
        public string picture {  get; set; }
        public double unitPrice { get; set; }
    }
}
