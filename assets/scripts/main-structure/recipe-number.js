export function setRecipesNumber(recipeTab) {
	const recipeNb = document.getElementById('recipe-nb');
	recipeNb.textContent = recipeTab.length;
}
