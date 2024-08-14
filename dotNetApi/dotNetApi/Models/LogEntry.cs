namespace api.Models
{
    public class LogEntry 
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public Guid RecipeID { get; set; }
        public Recipe? Recipe { get; set; }
    }
}