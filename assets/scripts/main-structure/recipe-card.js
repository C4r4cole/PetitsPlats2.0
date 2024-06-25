export function createRecipesGrid() {
	const recipesGrid = document.querySelector('.grid-content');

	return recipesGrid;
}

function createIngredientGrid() {
	const ingredientsGrid = document.createElement('div');

	ingredientsGrid.classList.add('rounded-b-2xl');
	ingredientsGrid.classList.add('grid', 'grid-cols-2', 'gap-x-4', 'gap-y-4');

	return ingredientsGrid;
}

function createRecipeCard() {
	const card = document.createElement('div');

	card.classList.add('rounded-2xl', 'bg-white', 'h-[700px]', 'relative', 'isolate');

	return card;
}

function createImgElement(imgSrc) {
	const img = document.createElement('img');

	img.setAttribute('src', `./images/recettes/${imgSrc}`);
	img.setAttribute('alt', '');
	img.classList.add('recipe-pic', 'h-1/3', 'w-full', 'object-cover', 'rounded-t-2xl');

	return img;
}

function createRecipeDiv() {
	const recipe = document.createElement('div');

	recipe.classList.add('rounded-b-2xl', 'bg-white', 'p-4');

	return recipe;
}

function createTitleElement(name) {
	const title = document.createElement('h2');

	title.classList.add('font-anton', 'my-6', 'text-lg');
	title.textContent = name;

	return title;
}

function createTimeElement(time) {
	const timeDiv = document.createElement('div');

	timeDiv.textContent = time + ' min';
	timeDiv.classList.add(
		'font-manrope',
		'bg-yellow',
		'px-2',
		'z-50',
		'rounded-md',
		'w-fit',
		'absolute',
		'top-5',
		'right-5'
	);

	return timeDiv;
}

function createRecetteSubtitle() {
	const recette = document.createElement('h3');

	recette.classList.add('font-manrope', 'mb-2', 'text-xs', 'font-bold', 'text-grey2');
	recette.textContent = 'recette';
	recette.classList.add('uppercase');

	return recette;
}

function createDescriptionDiv(description) {
	const descriptionDiv = document.createElement('p');

	descriptionDiv.textContent = description;
	descriptionDiv.classList.add('line-clamp-5', 'font-manrope', 'bg-white', 'mb-6', 'text-sm');

	return descriptionDiv;
}

function createIngredientsDiv() {
	const ingredientsDiv = document.createElement('h3');

	ingredientsDiv.classList.add('font-manrope', 'mb-2', 'text-xs', 'font-bold', 'text-grey2');
	ingredientsDiv.textContent = 'ingrédients';
	ingredientsDiv.classList.add('uppercase');

	return ingredientsDiv;
}

export function insertRecipeCard(element) {
	const recipesGrid = createRecipesGrid();
	const recipeCard = createRecipeCard();
	recipeCard.appendChild(createImgElement(element.image));
	recipeCard.appendChild(createTimeElement(element.time));

	const recipe = createRecipeDiv();

	const ingredientGrid = createIngredientGrid();
	const title = createTitleElement(element.name);
	const recette = createRecetteSubtitle();
	const descriptionDiv = createDescriptionDiv(element.description);
	const ingredientsDiv = createIngredientsDiv();
	recipe.appendChild(title);
	recipe.appendChild(recette);
	recipe.appendChild(descriptionDiv);
	recipe.appendChild(ingredientsDiv);
	recipe.appendChild(ingredientGrid);

	recipeCard.appendChild(recipe);
	recipesGrid.appendChild(recipeCard);

	return { recipesGrid, ingredientGrid };
}
