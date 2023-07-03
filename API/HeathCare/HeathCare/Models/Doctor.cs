using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace HeathCare.Models
{
    public class Doctor
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string? Id { get; set; }
        public string? Email { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Specialization { get; set; } = string.Empty;
        public int Experiance { get; set; }
        public string requestStatus { get; set; } = string.Empty;
 
        public string password { get; set; } = string.Empty;

        public string location { get; set; } = string.Empty;
        public string phone { get; set; } = string.Empty;




    }
}