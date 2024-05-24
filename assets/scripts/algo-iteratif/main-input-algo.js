import { displayRecipe } from '../main-structure/display-recipes.js';
import {
	addDropdownElements,
	displayAllDropdownElements,
	filterBy,
	getDropdownElementsById
} from '../main-structure/dropdown-elements.js';
import { APPAREILS, INGREDIENTS, USTENSILES } from '../main-structure/global-var.js';
import { recipes as RECIPES } from '../recipes.js';

export function manageInputsLogic() {
	const mainInput = document.getElementById('site-search');
	// const INGREDIENTS.dom = getDropdownElementsById('ingredients');
	// const APPAREILS.dom = getDropdownElementsById('appareils');
	// const USTENSILES.dom = getDropdownElementsById('ustensiles');

	mainInput.addEventListener('keyup', e => {
		const searchResult = e.target.value.toLowerCase();
		const sortedTableMainInput = [];

		if (e.key === 'Backspace' && searchResult.length === 2) {
			displayRecipe(RECIPES);
			displayAllDropdownElements();
			return;
		}

		if (searchResult.length < 3) {
			return;
		}

		for (const recipe of RECIPES) {
			const recipeName = recipe.name.toLowerCase();
			const recipeDescription = recipe.description.toLowerCase();

			if (recipeName.includes(searchResult)) {
				sortedTableMainInput.push(recipe);
			} else if (recipeDescription.includes(searchResult)) {
				sortedTableMainInput.push(recipe);
			} else {
				for (const ingredient of recipe.ingredients) {
					const ingredientName = ingredient.ingredient.toLowerCase();
					if (ingredientName.includes(searchResult)) {
						sortedTableMainInput.push(recipe);
						break;
					}
				}
			}
		}
		displayRecipe(sortedTableMainInput);

		displayAllDropdownElements();
	});

	const dropdownInputs = document.querySelectorAll('.dropdown-input');

	dropdownInputs.forEach(dropdownInput => {
		dropdownInput.addEventListener('keyup', e => {
			const searchResult = e.target.value;

			if (e.key === 'Backspace' && searchResult.length < 3) {
				displayAllDropdownElements();
				//todo : agir uniquement sur celui que l'on est en train de manipuler
				return;
			}

			if (searchResult.length < 3) {
				return;
			}

			filterBy(INGREDIENTS, e.target.value);
			filterBy(APPAREILS, e.target.value);
			filterBy(USTENSILES, e.target.value);
			//todo : agir uniquement sur celui que l'on est en train de manipuler
		});
	});
}
