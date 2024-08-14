using MongoDB.Bson;
using MongoDB.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class LogEntry 
    {
        public ObjectId Id { get; set; }
        [Required(ErrorMessage ="You must provide a title for the log entry")]
        [Display(Name = "Log entry title")]
        public string? Title { get; set; }
        public string? Content { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public Guid RecipeID { get; set; }
        public Recipe? Recipe { get; set; }
    }
}