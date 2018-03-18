using System.ComponentModel.DataAnnotations;

namespace OSGB.Api.Models
{
    public class ApplicationUser
    {
        [Required]
        [StringLength(60, MinimumLength = 7)]
        public string UserName { get; set; }

        [Required]
        [StringLength(60, MinimumLength = 8)]
        public string Password { get; set; }
    }
}