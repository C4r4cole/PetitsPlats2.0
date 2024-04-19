function createIngredientCard() {
	const ingredientCard = document.createElement('div');

	return ingredientCard;
}

function createIngredientName(element) {
	const ingredientName = document.createElement('h4');

	ingredientName.textContent = element.ingredient;
	ingredientName.classList.add('text-sm', 'font-manrope');

	return ingredientName;
}

function createIngredientQuantity(element) {
	const ingredientQty = document.createElement('p');

	ingredientQty.textContent = element.quantity;
	ingredientQty.classList.add('text-sm', 'font-manrope', 'text-grey2');

	return ingredientQty;
}

function createIngredientQtyUnit() {
	const ingredientQtyUnit = document.createElement('div');

	ingredientQtyUnit.classList.add('flex');

	return ingredientQtyUnit;
}

function createIngredientUnit(element) {
	const ingredientUnit = document.createElement('span');

	ingredientUnit.textContent = element.unit;
	ingredientUnit.classList.add('text-sm', 'font-manrope', 'text-grey2');

	return ingredientUnit;
}

export function displayIngredient(ingredientsTable, ingredientsGrid) {
	for (const element of ingredientsTable) {
		const ingredientCard = createIngredientCard();
		const ingredientQtyUnit = createIngredientQtyUnit();

		ingredientCard.appendChild(ingredientQtyUnit);
		ingredientCard.appendChild(createIngredientName(element));
		ingredientQtyUnit.appendChild(createIngredientQuantity(element));
		ingredientQtyUnit.appendChild(createIngredientUnit(element));

		ingredientsGrid.appendChild(ingredientCard);
	}
}
