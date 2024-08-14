using MongoDB.Bson;
using MongoDB.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    [Collection("recipes")]
    public class  Recipe 
    { 
        public ObjectId Id { get; set; }
        [Required(ErrorMessage = "You must provide a name for the recipe")]
        [Display(Name = "Recipe name")]
        public string? Name { get; set; }
        public string[]? Equipment { get; set; }
        public string[]? Ingredients { get; set; }
        public string[]? MethodSteps { get; set; }
        public float? MeasurementOriginalGravity { get; set; }
        public Visibility Visibility { get; set; } = Visibility.Private;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
    public enum Visibility
    {
        Public,
        Private
    }
}