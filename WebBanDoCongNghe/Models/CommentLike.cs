using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace BTTHUCHANH.Models
{
    [Table("Receipt")]
    public class Receipt
    {
        [Key]
        public string id { get; set; }
        public string userId { get; set; }
        public double TotalPrice { get; set; }
        public string date { get; set; }
    }
}
