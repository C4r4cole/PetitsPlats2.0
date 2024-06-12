import { getDropdownElementsById } from './dropdown-elements.js';

export let INGREDIENTS = {
	list: [],
	selected: [],
	dom: getDropdownElementsById('ingredients')
};

export let APPAREILS = {
	list: [],
	selected: [],
	dom: getDropdownElementsById('appareils')
};

export let USTENSILES = {
	list: [],
	selected: [],
	dom: getDropdownElementsById('ustensiles')
};

export let MAIN_INPUT = '';

export function updateMainInput(mainInput) {
	MAIN_INPUT = mainInput;
}
