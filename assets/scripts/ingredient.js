export function createIngredientName(element) {

    const ingredientName = document.createElement("h4");

    ingredientName.textContent = element.ingredient;
    ingredientName.classList.add("text-sm", "font-manrope");

    return ingredientName;
}

export function createIngredientQuantity(element){
    const ingredientQty = document.createElement("p");

    ingredientQty.textContent = element.quantity;
    ingredientQty.classList.add("text-sm", "font-manrope", "text-grey2");

    return ingredientQty;
}

export function createIngredientQtyUnit(){
    const ingredientQtyUnit = document.createElement("div");

    ingredientQtyUnit.classList.add("flex");

    return ingredientQtyUnit;
}

export function createIngredientUnit(element){
    const ingredientUnit = document.createElement("span");

    ingredientUnit.textContent = element.unit;
    ingredientUnit.classList.add("text-sm", "font-manrope", "text-grey2");
    
    return ingredientUnit;
}