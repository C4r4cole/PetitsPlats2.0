import {
	createIngredientCard,
	createIngredientName,
	createIngredientQtyUnit,
	createIngredientQuantity,
	createIngredientUnit
} from './ingredient.js';
import { createRecipesGrid, insertRecipeCard } from './recipe-card.js';
import { recipes as RECIPES } from './recipes.js';

function pushWithoutDuplicates(dropDownTable, string) {
	for (const element of dropDownTable) {
		if (element.localeCompare(string, undefined, { sensitivity: 'base' }) === 0) {
			return;
		}
	}
	dropDownTable.push(string);
}

function fillDefaultTable(recipe) {
	for (const { ingredient } of recipe.ingredients) {
		pushWithoutDuplicates(INGREDIENTS, ingredient);
	}

	pushWithoutDuplicates(APPAREILS, recipe.appliance);

	for (const ustensil of recipe.ustensils) {
		pushWithoutDuplicates(USTENSILES, ustensil);
	}
}

function displayIngredient(ingredientsTable, ingredientsGrid) {
	for (const element of ingredientsTable) {
		const ingredientCard = createIngredientCard();
		const ingredientQtyUnit = createIngredientQtyUnit();

		ingredientCard.appendChild(ingredientQtyUnit);
		ingredientCard.appendChild(createIngredientName(element));
		ingredientQtyUnit.appendChild(createIngredientQuantity(element));
		ingredientQtyUnit.appendChild(createIngredientUnit(element));

		ingredientsGrid.appendChild(ingredientCard);
	}
}

function clearRecipe() {
	document.querySelector('.grid-content').replaceChildren();
	INGREDIENTS = [];
	APPAREILS = [];
	USTENSILES = [];
}

function displayRecipe(recipes) {
	clearRecipe();

	for (const element of recipes) {
		const { ingredientGrid } = insertRecipeCard(element);

		displayIngredient(element.ingredients, ingredientGrid);
		fillDefaultTable(element);
	}
	setRecipesNumber(recipes);
}

function getDropdownElementsById(id) {
	const wrapper = document.getElementById(id);
	const input = wrapper.querySelector('input');
	const list = wrapper.querySelector('ul');
	return { wrapper, input, list };
}

function filterBy(list, element, userInput) {
	const finalList = [];
	for (const element of list) {
		if (element.toLowerCase().startsWith(userInput.toLowerCase())) {
			finalList.push(element);
		}
	}
	addDropdownElements(element, finalList);
}

function addDropdownElements(parentElement, elements) {
	parentElement.innerHTML = '';
	for (const element of elements) {
		const li = document.createElement('li');
		li.textContent = element;
		li.classList.add('my-2.5', 'hover:bg-yellow', 'px-3', 'cursor-pointer');
		li.setAttribute('tabindex', '1');
		parentElement.appendChild(li);

		li.addEventListener('click', () => {
			console.log('hello');
		});
	}
}

function setRecipesNumber(recipeTab) {
	const recipeNb = document.getElementById('recipe-nb');
	recipeNb.textContent = recipeTab.length;
}

// *********************************
//todo : A finaliser avec Benjamin - Down
// *********************************

function manageInputsLogic() {
	const mainInput = document.getElementById('site-search');

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

// *********************************
//todo : A finaliser avec Benjamin - Up
// *********************************

let INGREDIENTS = [];
let APPAREILS = [];
let USTENSILES = [];

displayRecipe(RECIPES);

const ingredientsElements = getDropdownElementsById('ingredients');
const appareilsElements = getDropdownElementsById('appareils');
const ustensilesElements = getDropdownElementsById('ustensiles');

addDropdownElements(ingredientsElements.list, INGREDIENTS);
addDropdownElements(appareilsElements.list, APPAREILS);
addDropdownElements(ustensilesElements.list, USTENSILES);

manageInputsLogic();

// setTimeout(() => {
//     addDropdownElements(dropdownIngredientsList, []);
// }, 3000);
