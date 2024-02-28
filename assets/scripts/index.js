import {recipes} from "./recipes.js";

const ingredients = [];
const appareilsTable = [];
const ustensilesTable = [];


function getTrimmedDescription(description, descriptionDiv){
    const maxChars = 200;
    if (description.length > maxChars) {
        const lastSpaceIndex = description.lastIndexOf(" ", maxChars);
        const trimmedDescription = description.slice(0, lastSpaceIndex);
        descriptionDiv.textContent = trimmedDescription;
    } else {
        descriptionDiv.textContent = description;
    }
};

function deleteDuplicates(ingredientsTable){
    for (const element of ingredientsTable){
        if (!ingredients.includes(element.ingredient)){
            ingredients.push(element.ingredient);
        }
    }
}


function displayIngredient(ingredientsTable, ingredientsGrid){
    for (const element of ingredientsTable){

        deleteDuplicates(ingredientsTable);
    
        const ingredientCard = document.createElement("div");    
        const ingredientName = document.createElement("h4");
        const ingredientQty = document.createElement("p");
        const ingredientUnit = document.createElement("span");
        const ingredientQtyUnit = document.createElement("div");
    
        ingredientQtyUnit.classList.add("flex");
        ingredientName.textContent = element.ingredient;
        ingredientName.classList.add("text-sm", "font-manrope");
        ingredientQty.textContent = element.quantity;
        ingredientQty.classList.add("text-sm", "font-manrope", "text-grey2");
        ingredientUnit.textContent = element.unit;
        ingredientUnit.classList.add("text-sm", "font-manrope", "text-grey2");
    
        ingredientQtyUnit.appendChild(ingredientQty);
        ingredientQtyUnit.appendChild(ingredientUnit);
        ingredientCard.appendChild(ingredientName);
        ingredientCard.appendChild(ingredientQtyUnit);
    
        ingredientsGrid.appendChild(ingredientCard);
    }
};

function displayRecipe(){
    for (const element of recipes){

        const imgSrc = element.image;
        const ingredientsTable = element.ingredients;
        const description = element.description;
        
        const recipesGrid = document.querySelector(".grid-content");
        const ingredientsGrid = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const recipe = document.createElement("div");
        const title = document.createElement("h2");
        const recette = document.createElement("h3");
        const descriptionDiv = document.createElement("p");
        const ingredients = document.createElement("h3");        
        
        card.classList.add("rounded-2xl", "bg-white", "h-[700px]");
        recipe.classList.add("rounded-b-2xl", "bg-white", "p-4");
        title.classList.add("font-anton", "my-6", "text-lg");
        recette.classList.add("font-manrope", "mb-2", "text-xs", "font-bold", "text-grey2");
        ingredients.classList.add("font-manrope", "mb-2", "text-xs", "font-bold", "text-grey2");
        descriptionDiv.classList.add("font-manrope", "bg-white", "mb-6", "text-sm");
        ingredientsGrid.classList.add("rounded-b-2xl");
        
        img.setAttribute("src", `./images/recettes/${imgSrc}`);
        img.setAttribute("alt", "");
        img.classList.add("recipe-pic", "h-1/3", "w-full", "object-cover", "rounded-t-2xl");
    
        title.textContent = element.name;
        recette.textContent = "recette";
        recette.classList.add("uppercase");
        ingredients.textContent = "ingrédients";
        ingredients.classList.add("uppercase");
        ingredientsGrid.classList.add("grid", "grid-cols-2", "gap-x-4", "gap-y-4");
        
    
        card.appendChild(img);
        card.appendChild(recipe);
        recipe.appendChild(title);
        recipe.appendChild(recette);
        recipe.appendChild(descriptionDiv);
        recipe.appendChild(ingredients);
        recipe.appendChild(ingredientsGrid);
        recipesGrid.appendChild(card);
        
        displayIngredient(ingredientsTable, ingredientsGrid);

        getTrimmedDescription(description, descriptionDiv);
        

        
        

    
        if (!appareilsTable.includes(element.appliance)){
            appareilsTable.push(element.appliance);
        }
    
    }
}

displayRecipe();


function getDropdownElementsById(id){
    const wrapper = document.getElementById(id);
    const input = wrapper.querySelector("input");
    const list = wrapper.querySelector("ul");
    return {wrapper, input, list};
}

const ingredientElements = getDropdownElementsById("ingredients");
const appareilsElements = getDropdownElementsById("appareils");
const ustensilesElements = getDropdownElementsById("ustensiles");


    ingredientElements.input.addEventListener("input", (e)=>{
        filterBy(ingredients, ingredientElements.list, e.target.value);
    })
    appareilsElements.input.addEventListener("input", (e)=>{
        filterBy(appareilsTable, appareilsElements.list, e.target.value);
    })
    ustensilesElements.input.addEventListener("input", (e)=>{
        filterBy(ustensilesTable, ustensilesElements.list, e.target.value);
    })


function filterBy(list, element, userInput){
    const finalList = [];
    for(const element of list){
        if (element.startsWith(userInput)){
            finalList.push(element);
        }
    }
    addDropdownElements(element, finalList);
}


function addDropdownElements(parentElement, elements){
    parentElement.innerHTML = "";
    for (const element of elements){
        const li = document.createElement("li");
        li.textContent = element;
        parentElement.appendChild(li);
    }
}

addDropdownElements(ingredientElements.list, ingredients);
addDropdownElements(appareilsElements.list, appareilsTable);
addDropdownElements(ustensilesElements.list, ustensilesTable);



// setTimeout(() => {
//     addDropdownElements(dropdownIngredientsList, []);
// }, 3000);