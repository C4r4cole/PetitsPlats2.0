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
		pushWithoutDuplicates(INGREDIENTS.list, ingredient);
	}

	pushWithoutDuplicates(APPAREILS.list, recipe.appliance);

	for (const ustensil of recipe.ustensils) {
		pushWithoutDuplicates(USTENSILES.list, ustensil);
	}
}
