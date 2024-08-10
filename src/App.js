import React, { useState } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe, index) => index !== id));
  };

  return (
    <>
      <div className="background-scroll">
        <div className="todo-container">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl md:text-8xl pb-0 md:pb-10 font-bold underline text-center text-white  mb-20  bg-gray-600 rounded-3xl ">
          Recipe Book
        </h1>
        <RecipeForm addRecipe={addRecipe} />
        <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      </div>
      </div>
      </div>
    </>
  );
}
export default App;
