import { APPAREILS, INGREDIENTS, USTENSILES } from './global-var.js';

export function clearRecipe() {
	document.querySelector('.grid-content').replaceChildren();
	INGREDIENTS.list = [];
	APPAREILS.list = [];
	USTENSILES.list = [];
}
