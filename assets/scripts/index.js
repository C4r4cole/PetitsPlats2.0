import { recipes as RECIPES } from './recipes.js';
import { displayAllDropdownElements } from './main-structure/dropdown-elements.js';
import { displayRecipe } from './main-structure/display-recipes.js';
import { manageInputsLogic } from './init-algo.js';

function main() {
	displayRecipe(RECIPES);
	displayAllDropdownElements();
	manageInputsLogic();
	console.log('hello world');
}

main();

// setTimeout(() => {
//     addDropdownElements(dropdownIngredientsList, []);
// }, 3000);
