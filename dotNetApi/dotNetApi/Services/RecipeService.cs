using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;
using api.Models;
using api.Data;

namespace api.Services {
    public class RecipeService : IRecipeService
    {
        private readonly BrewersBundleDbContext _brewersBundleDbContext;
        public RecipeService(BrewersBundleDbContext brewersBundleDbContext)
        {
            _brewersBundleDbContext = brewersBundleDbContext;
        }

        public async Task<List<Recipe>> GetAllRecipes()
        {
           // var recipes = await _brewersBundleDbContext.Recipes.OrderBy(r => r.Id).AsNoTracking().ToListAsync();
            return await _brewersBundleDbContext.Recipes.OrderBy(r => r.Id).AsNoTracking().ToListAsync();
        }

        public async Task<Recipe?> GetRecipeByID(ObjectId id)
        {
            return await _brewersBundleDbContext.Recipes.FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task AddRecipe(Recipe recipe)
        {
            await _brewersBundleDbContext.Recipes.AddAsync(recipe);

            _brewersBundleDbContext.ChangeTracker.DetectChanges();
            Console.WriteLine(_brewersBundleDbContext.ChangeTracker.DebugView.LongView);

            await _brewersBundleDbContext.SaveChangesAsync();
        }

        public async Task EditRecipe(ObjectId id, Recipe recipe)
        {
            var recipeToUpdate = await _brewersBundleDbContext.Recipes.FirstOrDefaultAsync(r => r.Id == id);

            if(recipeToUpdate != null)
            {
                recipeToUpdate.Name = recipe.Name;
                recipeToUpdate.Equipment = recipe.Equipment;
                recipeToUpdate.Ingredients = recipe.Ingredients;
                recipeToUpdate.MethodSteps = recipe.MethodSteps;
                recipeToUpdate.MeasurementOriginalGravity = recipe.MeasurementOriginalGravity;
                recipe.Visibility = recipe.Visibility;

                //_brewersBundleDbContext.Recipes.Update(recipeToUpdate);

                _brewersBundleDbContext.ChangeTracker.DetectChanges();
                Console.WriteLine(_brewersBundleDbContext.ChangeTracker.DebugView.LongView);

                await _brewersBundleDbContext.SaveChangesAsync();
            }  
            else
            {
                throw new ArgumentException("The recipe to update cannot be found");
            }
        }

        public async Task DeleteRecipe(ObjectId id)
        {
            var recipeToDelete = await _brewersBundleDbContext.Recipes.Where(r => r.Id == id).FirstOrDefaultAsync();
            if (recipeToDelete != null)
            {
                _brewersBundleDbContext.Recipes.Remove(recipeToDelete);
                _brewersBundleDbContext.ChangeTracker.DetectChanges();
                Console.WriteLine(_brewersBundleDbContext.ChangeTracker.DebugView.LongView);
                await _brewersBundleDbContext.SaveChangesAsync();
            }
            else
            {
                throw new ArgumentException("The recipe to be deleted cannot be found.");
            }
        }
    } 
}