import { displayAllDropdownElements, filterBy } from './main-structure/dropdown-elements.js';
import { APPAREILS, INGREDIENTS, USTENSILES, updateMainInput } from './main-structure/global-var.js';
import { filterAllRecipes } from './algo-fonctionnel/main-input-algo.js';

export function manageInputsLogic() {
	const mainInput = document.getElementById('site-search');

	mainInput.addEventListener('keyup', e => {
		updateMainInput(e.target.value);
		filterAllRecipes();
	});

	const dropdownInputs = document.querySelectorAll('.dropdown-input');

	dropdownInputs.forEach(dropdownInput => {
		dropdownInput.addEventListener('keyup', e => {
			const searchResult = e.target.value;

			if (e.key === 'Backspace' && searchResult.length < 3) {
				displayAllDropdownElements();
				//todo : agir uniquement sur celui que l'on est en train de manipuler
				return;
			}

			if (searchResult.length < 3) {
				return;
			}

			filterBy(INGREDIENTS, e.target.value);
			filterBy(APPAREILS, e.target.value);
			filterBy(USTENSILES, e.target.value);
			//todo : agir uniquement sur celui que l'on est en train de manipuler
		});
	});
}
