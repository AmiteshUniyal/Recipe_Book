//RecipeForm
import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, description });
    setTitle('');
    setDescription('');
  };

  return ( 
    <form onSubmit={handleSubmit} className="mb-4 bg-gray-600 p-4 rounded-2xl">
    <div className='flex flex-col space-x-0 md:space-x-20 sm:flex-col md:flex-row '>
    <div className="mb-2 w-full">
    <label className="block text-white font-bold mb-1">Recipe Name</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full p-2 border rounded italic text-black border-4"
      required
    />
    </div>
    <div className="mb-4 w-full">
    <label className="block text-white font-bold mb-1">Recipe Description</label>
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="w-full p-2 border rounded italic border-4 text-black border-4"
      required
    ></textarea>
    </div>
    </div>
      <div className="flex justify-center "> 
      <button type="submit" className="bg-blue-500  italic text-white  p-2 rounded">
        Yummy!!
      </button>
      </div>
    </form>
  );
}
export default RecipeForm;
