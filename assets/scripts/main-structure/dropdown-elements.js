import { APPAREILS, INGREDIENTS, USTENSILES } from './global-var.js';

export function getDropdownElementsById(id) {
	const wrapper = document.getElementById(id);
	const input = wrapper.querySelector('input');
	const list = wrapper.querySelector('ul');
	return { wrapper, input, list };
}

export function filterBy(list, element, userInput) {
	const finalList = [];
	for (const element of list) {
		if (element.toLowerCase().startsWith(userInput.toLowerCase())) {
			finalList.push(element);
		}
	}
	addDropdownElements(element, finalList);
}

export function addDropdownElements(parentElement, elements) {
	parentElement.innerHTML = '';
	for (const element of elements) {
		const li = document.createElement('li');
		li.textContent = element;
		li.classList.add('my-2.5', 'hover:bg-yellow', 'px-3', 'cursor-pointer');
		li.setAttribute('tabindex', '1');
		parentElement.appendChild(li);

		li.addEventListener('click', () => {
			console.log('hello');
		});
	}
}

export function displayAllDropdownElements() {
	const ingredientsElements = getDropdownElementsById('ingredients');
	const appareilsElements = getDropdownElementsById('appareils');
	const ustensilesElements = getDropdownElementsById('ustensiles');

	addDropdownElements(ingredientsElements.list, INGREDIENTS);
	addDropdownElements(appareilsElements.list, APPAREILS);
	addDropdownElements(ustensilesElements.list, USTENSILES);
}
