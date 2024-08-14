using MongoDB.Bson;
using api.Models;

namespace api.Services {
    public interface IRecipeService 
    {
        Task<List<Recipe>> GetAllRecipes();
        Task<Recipe?> GetRecipeByID(ObjectId id);

        Task AddRecipe(Recipe newRecipe);
        Task EditRecipe(ObjectId id, Recipe updatedRecipe);
        Task DeleteRecipe(ObjectId id);
    }
}