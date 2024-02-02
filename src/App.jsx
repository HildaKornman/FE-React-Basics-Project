/* eslint-disable */

import {Center, Heading} from '@chakra-ui/react';
import {useState} from 'react';
import {RecipeChoice} from './components/RecipeChoice';
import {RecipeSearch} from './components/RecipeSearch';

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  const greeting = "Welcome to the Recipe App";
  
  return (
    <Center h="100vh" flexDir="column" color="black.600" backgroundColor="blue.100">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe}/>
      ):(
        <>
          <Heading size="2xl" mb={8} color="blue.900">
            {greeting}
          </Heading>
          <RecipeSearch onClick={setUserRecipe}/>
        </>
      )}
    </Center>
  );
};


