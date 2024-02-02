/* eslint-disable */

import { useState } from 'react';
import { availableRecipes } from '../utils/data';
import { RecipeListPage } from './RecipeListPage';
import { TextInput } from './ui/TextInput';

export const RecipeSearch=({onClick})=>{
  const [searchField, setSearchField] = useState('');

  const matchedRecipes = availableRecipes.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Which recipe do you search for? Type here:</label>
      <TextInput onChange={handleChange} w={200} mb={8}/>
      <RecipeListPage onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
