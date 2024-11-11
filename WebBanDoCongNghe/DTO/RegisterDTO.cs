using System.ComponentModel.DataAnnotations;

namespace WebBanDoCongNghe.DTO
{
    public class RegisterDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        public string AccountName { get; set; }
    }
}
