import { APPAREILS, INGREDIENTS, USTENSILES } from './global-var.js';

function pushWithoutDuplicates(dropDownTable, string) {
	for (const element of dropDownTable) {
		if (element.localeCompare(string, undefined, { sensitivity: 'base' }) === 0) {
			return;
		}
	}
	dropDownTable.push(string);
}

export function fillDefaultTable(recipe) {
	for (const { ingredient } of recipe.ingredients) {
		pushWithoutDuplicates(INGREDIENTS, ingredient);
	}

	pushWithoutDuplicates(APPAREILS, recipe.appliance);

	for (const ustensil of recipe.ustensils) {
		pushWithoutDuplicates(USTENSILES, ustensil);
	}
}
