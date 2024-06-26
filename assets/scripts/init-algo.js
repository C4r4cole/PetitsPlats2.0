import { APPAREILS, INGREDIENTS, USTENSILES, updateMainInput } from './main-structure/global-var.js';
import { filterAllRecipes } from './algo-fonctionnel/main-input-algo.js';
import { filterBy } from './main-structure/dropdown-elements.js';

export function manageInputsLogic() {
	const mainInput = document.getElementById('site-search');

	mainInput.addEventListener('keyup', e => {
		updateMainInput(e.target.value);
		filterAllRecipes();
	});

	// const dropdownInputs = document.querySelectorAll('.dropdown-input');

	// dropdownInputs.forEach(dropdownInput => {
	// 	dropdownInput.addEventListener('keyup', e => {

	// 	});
	// });

	// function handleDropdownEvent(ELEMENT, e) {
	// 	console.log(ELEMENT.list);
	// 	const searchResult = e.target.value;

	// 	const filteredList = ELEMENT.list.filter(element => {
	// 		if (element.includes(searchResult)) {
	// 			return true;
	// 		}
	// 		return false;
	// 	});

	// 	console.log(filteredList);
	// 	// if (e.key === 'Backspace' && searchResult.length < 3) {
	// 	// 	displayAllDropdownElements();
	// 	// 	//todo : agir uniquement sur celui que l'on est en train de manipuler
	// 	// 	return;
	// 	// }
	// 	// if (searchResult.length < 3) {
	// 	// 	return;
	// 	// }
	// 	// filterBy(INGREDIENTS, e.target.value);
	// 	// filterBy(APPAREILS, e.target.value);
	// 	// filterBy(USTENSILES, e.target.value);
	// 	// //todo : agir uniquement sur celui que l'on est en train de manipuler
	// }

	INGREDIENTS.dom.input.addEventListener('keyup', e => {
		filterBy(INGREDIENTS, e.target.value);
	});

	APPAREILS.dom.input.addEventListener('keyup', e => {
		filterBy(APPAREILS, e.target.value);
	});

	USTENSILES.dom.input.addEventListener('keyup', e => {
		filterBy(USTENSILES, e.target.value);
	});
}
