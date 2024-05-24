import { recipes as RECIPES } from '../recipes.js';
import { displayRecipe } from './display-recipes.js';
import { displayAllDropdownElements, getDropdownElementsById } from './dropdown-elements.js';

export let INGREDIENTS = {
	list: [],
	selected: [],
	deletedTab: [],
	dom: getDropdownElementsById('ingredients')
};

export let APPAREILS = {
	list: [],
	selected: [],
	deletedTab: [],
	dom: getDropdownElementsById('appareils')
};

export let USTENSILES = {
	list: [],
	selected: [],
	deletedTab: [],
	dom: getDropdownElementsById('ustensiles')
};

export let MAIN_INPUT = '';

export function updateMainInput(mainInput) {
	MAIN_INPUT = mainInput;
}
