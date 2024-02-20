console.log(recipes);

function displayIngredient(ingredientsTable, ingredientsGrid){
    
    for (let i=0; i<ingredientsTable.length; i++){
        const ingredient = ingredientsTable[i];
        const ingredientCard = document.createElement("div");

        const ingredientName = document.createElement("h4");
        const ingredientQty = document.createElement("p");
        const ingredientUnit = document.createElement("span");
        const ingredientQtyUnit = document.createElement("div");

        ingredientQtyUnit.classList.add("flex");
        ingredientName.textContent = ingredient.ingredient;
        ingredientName.classList.add("text-sm", "font-manrope");
        ingredientQty.textContent = ingredient.quantity;
        ingredientQty.classList.add("text-sm", "font-manrope", "text-grey2");
        ingredientUnit.textContent = ingredient.unit;
        ingredientUnit.classList.add("text-sm", "font-manrope", "text-grey2");
    
        ingredientQtyUnit.appendChild(ingredientQty);
        ingredientQtyUnit.appendChild(ingredientUnit);
        ingredientCard.appendChild(ingredientName);
        ingredientCard.appendChild(ingredientQtyUnit);

        ingredientsGrid.appendChild(ingredientCard);
    }
};

function displayRecipe(){
    for (let i=0; i<recipes.length; i++){
        const imgSrc = recipes[i].image;
        const ingredientsTable = recipes[i].ingredients;
        
        const ingredientsGrid = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const recipe = document.createElement("div");
        const title = document.createElement("h2");
        const recette = document.createElement("h3");
        const blurb = document.createElement("p");
        const ingredients = document.createElement("h3");
        
        const maxChars = 200;
        const description = recipes[i].description;
        
        card.classList.add("rounded-2xl", "bg-white", "h-[700px]");
        recipe.classList.add("rounded-b-2xl", "bg-white", "p-4");
        title.classList.add("font-anton", "my-6", "text-lg");
        recette.classList.add("font-manrope", "mb-2", "text-xs", "font-bold", "text-grey2");
        ingredients.classList.add("font-manrope", "mb-2", "text-xs", "font-bold", "text-grey2");
        blurb.classList.add("font-manrope", "bg-white", "mb-6", "text-sm");
        ingredientsGrid.classList.add("rounded-b-2xl");
        
        img.setAttribute("src", `./images/recettes/${imgSrc}`);
        img.setAttribute("alt", "");
        img.classList.add("recipe-pic", "h-1/3", "w-full", "object-cover", "rounded-t-2xl");
        

        if (description.length > maxChars) {
            const lastSpaceIndex = description.lastIndexOf(" ", maxChars);
            const trimmedDescription = description.slice(0, lastSpaceIndex);
            blurb.textContent = trimmedDescription;
        } else {
            blurb.textContent = description;
        }

        title.textContent = recipes[i].name;
        recette.textContent = "recette";
        recette.classList.add("uppercase");
        ingredients.textContent = "ingrédients";
        ingredients.classList.add("uppercase");
        ingredientsGrid.classList.add("grid", "grid-cols-2", "gap-x-4", "gap-y-4");
        
   
        card.appendChild(img);
        card.appendChild(recipe);
        recipe.appendChild(title);
        recipe.appendChild(recette);
        recipe.appendChild(blurb);
        recipe.appendChild(ingredients);
        recipe.appendChild(ingredientsGrid);
        displayIngredient(ingredientsTable, ingredientsGrid);
        
        const recipesGrid = document.querySelector(".grid-content");
        
        
        recipesGrid.appendChild(card);
    }
}

displayRecipe();


