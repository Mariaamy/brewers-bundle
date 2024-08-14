using api.Data;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace api.Controllers
{
    [Route("api/recipe")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeService _recipeService;
        public RecipeController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        [HttpGet]
        public IActionResult GetAllRecipes()
        {
            return Ok(_recipeService.GetAllRecipes());
        }

        [HttpGet("{id}")]
        public IActionResult GetRecipeById([FromRoute]ObjectId id)
        {
            var recipe = _recipeService.GetRecipeByID(id);
            if (recipe == null)
            {
                return NotFound();
            }
            return Ok(recipe);
        }

        [HttpPost]
        public IActionResult CreateRecipe([FromBody] Recipe recipe)
        {
            if (recipe == null) {
                return BadRequest();
            }
            _recipeService.AddRecipe(recipe);
            return CreatedAtAction(nameof(GetRecipeById), new { id = recipe.Id }, recipe);
        }

        [HttpPut("{id}")]
        public IActionResult EditRecipe([FromRoute]ObjectId id, [FromBody] Recipe recipe) {
            
            if (recipe == null)
            {
                return BadRequest();
            }
            _recipeService.EditRecipe(id, recipe);
            return Ok(recipe);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteRecipe([FromRoute] ObjectId id) {
            _recipeService.DeleteRecipe(id);
            return Ok();
        }
    }
}