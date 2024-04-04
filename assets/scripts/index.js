import { createIngredientName, createIngredientQtyUnit, createIngredientQuantity, createIngredientUnit } from "./ingredient.js";
import {recipes} from "./recipes.js";


function pushWithoutDuplicates(dropDownTable, string){
        for (const element of dropDownTable){
            if (element.localeCompare(string, undefined, {sensitivity: 'base'}) === 0){
                return
            }
        }
        dropDownTable.push(string)
}

function fillDefaultTable(recipe){
    for (const {ingredient} of recipe.ingredients){
        pushWithoutDuplicates(INGREDIENTS, ingredient)
    }

        pushWithoutDuplicates(APPAREILS, recipe.appliance);


        for (const ustensil of recipe.ustensils){
        pushWithoutDuplicates(USTENSILES, ustensil);

        }
};

function displayIngredient(ingredientsTable, ingredientsGrid){
    const ingredientQtyUnit = createIngredientQtyUnit();
    for (const element of ingredientsTable){
    
        const ingredientCard = document.createElement("div"); 
    
        ingredientCard.appendChild(createIngredientQtyUnit());
        ingredientCard.appendChild(createIngredientName(element));
        ingredientQtyUnit.appendChild(createIngredientQuantity(element));
        ingredientQtyUnit.appendChild(createIngredientUnit(element));
    
        ingredientsGrid.appendChild(ingredientCard);
    }
};

function displayRecipe(){
    for (const element of recipes){

        const imgSrc = element.image;
        const ingredients = element.ingredients;
        const description = element.description;
        
        const recipesGrid = document.querySelector(".grid-content");
        const ingredientsGrid = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const recipe = document.createElement("div");
        const title = document.createElement("h2");
        const recette = document.createElement("h3");
        const descriptionDiv = document.createElement("p");
        const ingredientsDiv = document.createElement("h3");        
        
        card.classList.add("rounded-2xl", "bg-white", "h-[700px]");
        recipe.classList.add("rounded-b-2xl", "bg-white", "p-4");
        title.classList.add("font-anton", "my-6", "text-lg");
        recette.classList.add("font-manrope", "mb-2", "text-xs", "font-bold", "text-grey2");
        ingredientsDiv.classList.add("font-manrope", "mb-2", "text-xs", "font-bold", "text-grey2");
        descriptionDiv.classList.add("line-clamp-5", "font-manrope", "bg-white", "mb-6", "text-sm");
        ingredientsGrid.classList.add("rounded-b-2xl");
        
        img.setAttribute("src", `./images/recettes/${imgSrc}`);
        img.setAttribute("alt", "");
        img.classList.add("recipe-pic", "h-1/3", "w-full", "object-cover", "rounded-t-2xl");
    
        title.textContent = element.name;
        recette.textContent = "recette";
        recette.classList.add("uppercase");
        ingredientsDiv.textContent = "ingrédients";
        ingredientsDiv.classList.add("uppercase");
        ingredientsGrid.classList.add("grid", "grid-cols-2", "gap-x-4", "gap-y-4");
        descriptionDiv.textContent = description;
    
        card.appendChild(img);
        card.appendChild(recipe);
        recipe.appendChild(title);
        recipe.appendChild(recette);
        recipe.appendChild(descriptionDiv);
        recipe.appendChild(ingredientsDiv);
        recipe.appendChild(ingredientsGrid);
        recipesGrid.appendChild(card);

        displayIngredient(ingredients, ingredientsGrid);
        fillDefaultTable(element);
    }
};

function getDropdownElementsById(id){
    const wrapper = document.getElementById(id);
    const input = wrapper.querySelector("input");
    const list = wrapper.querySelector("ul");
    return {wrapper, input, list};
};

function filterBy(list, element, userInput){
    const finalList = [];
    for(const element of list){
        if (element.startsWith(userInput)){
            finalList.push(element);
        }
    }
    addDropdownElements(element, finalList);
};


function addDropdownElements(parentElement, elements){
    parentElement.innerHTML = "";
    for (const element of elements){
        const li = document.createElement("li");
        li.textContent = element;
        li.classList.add("mb-5", "hover:bg-yellow");
        parentElement.appendChild(li);
    }
};

function setRecipesNumber(recipeTab){
    const recipeNb = document.getElementById("recipe-nb");
    recipeNb.textContent = recipeTab.length;
}

const INGREDIENTS = [];
const APPAREILS = [];
const USTENSILES = [];


const ingredientsElements = getDropdownElementsById("ingredients");
const appareilsElements = getDropdownElementsById("appareils");
const ustensilesElements = getDropdownElementsById("ustensiles");


ingredientsElements.input.addEventListener("input", (e)=>{
        filterBy(INGREDIENTS, ingredientsElements.list, e.target.value);
    })
    appareilsElements.input.addEventListener("input", (e)=>{
        filterBy(APPAREILS, appareilsElements.list, e.target.value);
    })
    ustensilesElements.input.addEventListener("input", (e)=>{
        filterBy(USTENSILES, ustensilesElements.list, e.target.value);
    })
    
    
addDropdownElements(ingredientsElements.list, INGREDIENTS);
addDropdownElements(appareilsElements.list, APPAREILS);
addDropdownElements(ustensilesElements.list, USTENSILES);



// setTimeout(() => {
    //     addDropdownElements(dropdownIngredientsList, []);
    // }, 3000);
    
    
    setRecipesNumber(recipes);
    displayRecipe();