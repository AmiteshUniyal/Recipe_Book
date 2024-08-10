import React from 'react';
function RecipeItem({ id, recipe, deleteRecipe }) { 
  return (
    <div className="border p-4 mb-2 rounded bg-gray-300 ">
      <h2 className="text-xl font-bold ">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button
        onClick={() => deleteRecipe(id)}
        className=" p-1 text-white mt-2 bg-red-500 rounded"
      >
        Delete
      </button>
    </div>
  );
}
export default RecipeItem;