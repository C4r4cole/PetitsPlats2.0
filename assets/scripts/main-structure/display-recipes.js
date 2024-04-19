import { clearRecipe } from './global-var.js';
import { displayIngredient } from './ingredient.js';
import { fillDefaultTable } from './main-table.js';
import { insertRecipeCard } from './recipe-card.js';
import { setRecipesNumber } from './recipe-number.js';

export function displayRecipe(recipes) {
	clearRecipe();

	for (const element of recipes) {
		const { ingredientGrid } = insertRecipeCard(element);

		displayIngredient(element.ingredients, ingredientGrid);
		fillDefaultTable(element);
	}
	setRecipesNumber(recipes);
}
