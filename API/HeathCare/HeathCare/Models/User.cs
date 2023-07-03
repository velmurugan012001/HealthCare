using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace HeathCare.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string? Id { get; set; }
        public string? Email { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string location { get; set; } = string.Empty;
        public string phone { get; set; } = string.Empty;

        public byte[]? Password { get; set; }
        public byte[]? HashKey { get; set; }


    }
}