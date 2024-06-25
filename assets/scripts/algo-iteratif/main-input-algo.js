import { recipes as RECIPES } from '../recipes.js';
import { displayRecipe } from '../main-structure/display-recipes.js';
import { displayAllDropdownElements } from '../main-structure/dropdown-elements.js';
import { APPAREILS, INGREDIENTS, MAIN_INPUT, USTENSILES } from '../main-structure/global-var.js';

export function filterAllRecipes() {
	const searchResult = MAIN_INPUT.toLowerCase();

	const main = [];
	for (const recipe of RECIPES) {
		const recipeName = recipe.name.toLowerCase();
		const recipeDescription = recipe.description.toLowerCase();
		if (searchResult.length < 3 || recipeName.includes(searchResult) || recipeDescription.includes(searchResult)) {
			main.push(recipe);
			continue;
		}

		const ingredientTable = [];
		for (const ingredient of recipe.ingredients) {
			const ingredientName = ingredient.ingredient.toLowerCase();
			if (ingredientName.includes(searchResult)) {
				ingredientTable.push(ingredient);
			}
		}

		if (ingredientTable.length > 0) {
			main.push(recipe);
		}
	}

	const mainAndIngredient = [];
	for (const recipe of main) {
		const validIngredients = INGREDIENTS.selected;

		let isAllValidIngredients = true;
		for (const ingredient of validIngredients) {
			let isIngredientInRecipe = false;
			for (const element of recipe.ingredients) {
				if (element.ingredient === ingredient) {
					isIngredientInRecipe = true;
					break;
				}
			}

			if (!isIngredientInRecipe) {
				isAllValidIngredients = false;
				break;
			}
		}

		if (isAllValidIngredients) {
			mainAndIngredient.push(recipe);
		}
	}

	const mainAndIngredientAndAppareils = [];
	for (const recipe of mainAndIngredient) {
		const validAppareils = APPAREILS.selected;

		let isAllValidAppareils = true;
		for (const appareil of validAppareils) {
			if (recipe.appliance !== appareil) {
				isAllValidAppareils = false;
				break;
			}
		}

		if (isAllValidAppareils) {
			mainAndIngredientAndAppareils.push(recipe);
		}
	}

	const mainAndIngredientAndAppareilsAndUstensiles = [];
	for (const recipe of mainAndIngredientAndAppareils) {
		const validUstensiles = USTENSILES.selected;

		let isAllValidUstensiles = true;
		for (const ustensile of validUstensiles) {
			let isUstensileInRecipe = false;
			for (const element of recipe.ustensils) {
				if (element === ustensile) {
					isUstensileInRecipe = true;
					break;
				}
			}
			if (!isUstensileInRecipe) {
				isAllValidUstensiles = false;
				break;
			}
		}
		// validUstensiles.every(ustensile => recipe.ustensils.some(e => e === ustensile));

		if (isAllValidUstensiles) {
			mainAndIngredientAndAppareilsAndUstensiles.push(recipe);
		}
	}
	displayRecipe(mainAndIngredientAndAppareilsAndUstensiles);
	displayAllDropdownElements();
}
