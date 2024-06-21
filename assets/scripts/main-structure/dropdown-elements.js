import { APPAREILS, INGREDIENTS, MAIN_INPUT, USTENSILES } from './global-var.js';
import { filterAllRecipes } from '../algo-iteratif/main-input-algo.js';

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
		if (element.toLowerCase().includes(userInput.toLowerCase())) {
			finalList.push(element);
		}
	}
	addDropdownElements(ELEMENT, finalList);
}

function createLi(element) {
	const li = document.createElement('li');

	li.textContent = element;
	li.classList.add('py-3', 'hover:bg-yellow', 'px-3', 'cursor-pointer');
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
		'mb-1',
		'w-40',
		'mr-1'
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

export function removeSelectedElement(crossElement, selectedElements) {
	const selectedLi = crossElement.parentElement.firstChild.textContent;
	const selectedLiIndex = selectedElements.indexOf(selectedLi);

	selectedElements.splice(selectedLiIndex, 1);

	crossElement.parentElement.remove();
	filterAllRecipes();
}

export function addSelectedElement(selectedLi, selectedElements, domWrapper, selectedElementWrapper, dupSelectedLi) {
	const choosen = document.getElementById('choosen');

	selectedElements.push(selectedLi.textContent);

	filterAllRecipes();

	choosen.appendChild(selectedElementWrapper);
	dupSelectedLi.focus();
}

export function addDropdownElements(ELEMENT, list) {
	const { list: ul, inputWrapper: domWrapper } = ELEMENT.dom;
	const selectedElements = ELEMENT.selected;

	ul.innerHTML = '';

	for (const element of list) {
		// if (selectedElements.includes(element)) {
		// 	continue;
		// }

		const li = createLi(element);

		if (selectedElements.includes(element)) {
			li.classList.add('bg-yellow');
		}

		const { selectedElementWrapper, dupSelectedLi, crossElement } = createSelectedElement(li);

		crossElement.addEventListener('mouseup', e => {
			removeSelectedElement(e.target, selectedElements);
		});

		li.addEventListener('mouseup', e => {
			addSelectedElement(e.target, selectedElements, domWrapper, selectedElementWrapper, dupSelectedLi);
		});
		ul.appendChild(li);
	}
}

export function displayAllDropdownElements() {
	addDropdownElements(INGREDIENTS, INGREDIENTS.list);
	addDropdownElements(APPAREILS, APPAREILS.list);
	addDropdownElements(USTENSILES, USTENSILES.list);
}
