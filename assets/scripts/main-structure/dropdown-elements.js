import { displayRecipe } from './display-recipes.js';
import { APPAREILS, INGREDIENTS, USTENSILES } from './global-var.js';
import { filterAllRecipes } from '../algo-fonctionnel/main-input-algo.js';
import { recipes as RECIPES } from '../recipes.js';

export function getDropdownElementsById(id) {
	const wrapper = document.getElementById(id);
	const inputWrapper = wrapper.querySelector('.input-wrapper');
	const input = wrapper.querySelector('input');
	const list = wrapper.querySelector('ul');
	return { wrapper, inputWrapper, input, list };
}

export function filterBy(ELEMENT, userInput) {
	const finalList = [];

	for (const element of ELEMENT.list) {
		if (element.toLowerCase().startsWith(userInput.toLowerCase())) {
			finalList.push(element);
		}
	}
	addDropdownElements(ELEMENT, finalList);
}

function createLi(element) {
	const li = document.createElement('li');

	li.textContent = element;
	li.classList.add('my-2.5', 'hover:bg-yellow', 'px-3', 'cursor-pointer');
	li.setAttribute('tabindex', '1');

	return li;
}

function createSelectedElement(li) {
	const selectedElementWrapper = document.createElement('div');
	selectedElementWrapper.classList.add(
		'flex',
		'justify-between',
		'items-center',
		'bg-yellow',
		'pr-2',
		'rounded-full',
		'mb-1'
	);

	const dupSelectedLi = li.cloneNode(true);
	dupSelectedLi.classList.add('list-none');

	const crossElement = document.createElement('i');
	crossElement.classList.add('fa-solid', 'fa-circle-xmark', 'cursor-pointer');
	crossElement.setAttribute('tabindex', '1');

	selectedElementWrapper.appendChild(dupSelectedLi);
	selectedElementWrapper.appendChild(crossElement);

	return { selectedElementWrapper, dupSelectedLi, crossElement };
}

function removeSelectedElement(crossElement, selectedElement) {
	const selectedLi = crossElement.parentElement.firstChild.textContent;
	const selectedLiIndex = selectedElement.indexOf(selectedLi);

	selectedElement.splice(selectedLiIndex, 1);

	crossElement.parentElement.remove();
	filterAllRecipes();
}

function addSelectedElement(selectedLi, selectedElement, domWrapper, selectedElementWrapper, dupSelectedLi) {
	selectedElement.push(selectedLi.textContent);

	filterAllRecipes();

	domWrapper.appendChild(selectedElementWrapper);
	dupSelectedLi.focus();
}

export function addDropdownElements(ELEMENT, list) {
	const { list: ul, inputWrapper: domWrapper } = ELEMENT.dom;
	const selectedElement = ELEMENT.selected;

	ul.innerHTML = '';

	for (const element of list) {
		if (selectedElement.includes(element)) {
			continue;
		}

		const li = createLi(element);

		const { selectedElementWrapper, dupSelectedLi, crossElement } = createSelectedElement(li);

		crossElement.addEventListener('mouseup', e => {
			removeSelectedElement(e.target, selectedElement);
		});

		li.addEventListener('mouseup', e => {
			addSelectedElement(e.target, selectedElement, domWrapper, selectedElementWrapper, dupSelectedLi);
		});
		ul.appendChild(li);
	}
}

export function displayAllDropdownElements() {
	addDropdownElements(INGREDIENTS, INGREDIENTS.list);
	addDropdownElements(APPAREILS, APPAREILS.list);
	addDropdownElements(USTENSILES, USTENSILES.list);
}
