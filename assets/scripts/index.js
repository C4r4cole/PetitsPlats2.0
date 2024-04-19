import { recipes as RECIPES } from './recipes.js';
import { displayAllDropdownElements } from './main-structure/dropdown-elements.js';
import { displayRecipe } from './main-structure/display-recipes.js';
import { manageInputsLogic } from './algo-iteratif/main-input-algo.js';

function main() {
	displayRecipe(RECIPES);
	displayAllDropdownElements();
	manageInputsLogic();
}

main();

// setTimeout(() => {
//     addDropdownElements(dropdownIngredientsList, []);
// }, 3000);
