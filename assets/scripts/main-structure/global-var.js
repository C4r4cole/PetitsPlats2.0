export let INGREDIENTS = [];
export let APPAREILS = [];
export let USTENSILES = [];

export function clearRecipe() {
	document.querySelector('.grid-content').replaceChildren();
	INGREDIENTS = [];
	APPAREILS = [];
	USTENSILES = [];
}
