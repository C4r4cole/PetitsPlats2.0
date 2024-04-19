import { displayRecipe } from '../main-structure/display-recipes.js';
import { addDropdownElements, filterBy, getDropdownElementsById } from '../main-structure/dropdown-elements.js';
import { APPAREILS, INGREDIENTS, USTENSILES } from '../main-structure/global-var.js';
import { recipes as RECIPES } from '../recipes.js';

export function manageInputsLogic() {
	const mainInput = document.getElementById('site-search');
	const ingredientsElements = getDropdownElementsById('ingredients');
	const appareilsElements = getDropdownElementsById('appareils');
	const ustensilesElements = getDropdownElementsById('ustensiles');

	mainInput.addEventListener('keyup', e => {
		const searchResult = e.target.value.toLowerCase();
		const sortedTableMainInput = [];

		if (e.key === 'Backspace' && searchResult.length === 2) {
			displayRecipe(RECIPES);
			addDropdownElements(ingredientsElements.list, INGREDIENTS);
			addDropdownElements(appareilsElements.list, APPAREILS);
			addDropdownElements(ustensilesElements.list, USTENSILES);
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

		addDropdownElements(ingredientsElements.list, INGREDIENTS);
		addDropdownElements(appareilsElements.list, APPAREILS);
		addDropdownElements(ustensilesElements.list, USTENSILES);
	});

	const dropdownInputs = document.querySelectorAll('.dropdown-input');

	dropdownInputs.forEach(dropdownInput => {
		dropdownInput.addEventListener('keyup', e => {
			const searchResult = e.target.value;

			if (e.key === 'Backspace' && searchResult.length < 3) {
				addDropdownElements(ingredientsElements.list, INGREDIENTS);
				addDropdownElements(appareilsElements.list, APPAREILS);
				addDropdownElements(ustensilesElements.list, USTENSILES);
				//todo : agir uniquement sur celui que l'on est en train de manipuler
				return;
			}

			if (searchResult.length < 3) {
				return;
			}

			filterBy(INGREDIENTS, ingredientsElements.list, e.target.value);
			filterBy(APPAREILS, appareilsElements.list, e.target.value);
			filterBy(USTENSILES, ustensilesElements.list, e.target.value);
			//todo : agir uniquement sur celui que l'on est en train de manipuler
		});
	});
}
