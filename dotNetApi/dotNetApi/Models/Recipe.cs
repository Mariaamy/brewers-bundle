namespace api.Models
{
    public class  Recipe 
    { 
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string[]? Equipment { get; set; }
        public string[]? Ingredients { get; set; }
        public string[]? MethodSteps { get; set; }
        public int? MeasurementOriginalGravity { get; set; }
        public Visibility Visibility { get; set; } = Visibility.Private;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
    public enum Visibility
    {
        Public,
        Private
    }
}