import { recipes as RECIPES } from '../recipes.js';
import { displayRecipe } from '../main-structure/display-recipes.js';
import { addDropdownElements, displayAllDropdownElements } from '../main-structure/dropdown-elements.js';
import { APPAREILS, INGREDIENTS, MAIN_INPUT, USTENSILES } from '../main-structure/global-var.js';

export function filterAllRecipes() {
	const searchResult = MAIN_INPUT.toLowerCase();

	if (searchResult.length < 3) {
		displayRecipe(RECIPES);
		addDropdownElements(INGREDIENTS, INGREDIENTS.list);
		addDropdownElements(APPAREILS, APPAREILS.list);
		addDropdownElements(USTENSILES, USTENSILES.list);
		return;
	}

	const main = RECIPES.filter(recipe => {
		const recipeName = recipe.name.toLowerCase();
		const recipeDescription = recipe.description.toLowerCase();
		if (recipeName.includes(searchResult) || recipeDescription.includes(searchResult)) {
			return true;
		}

		const ingredientTable = recipe.ingredients.filter(ingredient => {
			const ingredientName = ingredient.ingredient.toLowerCase();
			if (ingredientName.includes(searchResult)) {
				return true;
			}
			return false;
		});

		if (ingredientTable.length > 0) {
			return true;
		}

		return false;
	});

	const mainAndIngredient = main.filter(recipe => {
		const validIngredients = INGREDIENTS.selected;

		const isAllValidIngredients = validIngredients.every(ingredient =>
			recipe.ingredients.some(e => e.ingredient === ingredient)
		);

		return isAllValidIngredients;
	});

	const mainAndIngredientAndAppareils = mainAndIngredient.filter(recipe => {
		const validAppareils = APPAREILS.selected;

		const isAllValidAppareils = validAppareils.every(appareil => recipe.appliance === appareil);

		return isAllValidAppareils;
	});

	const mainAndIngredientAndAppareilsAndUstensiles = mainAndIngredientAndAppareils.filter(recipe => {
		const validUstensiles = USTENSILES.selected;

		const isAllValidUstensiles = validUstensiles.every(ustensile => recipe.ustensils.some(e => e === ustensile));

		return isAllValidUstensiles;
	});

	displayRecipe(mainAndIngredientAndAppareilsAndUstensiles);
	displayAllDropdownElements();
}
