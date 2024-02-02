/* eslint-disable */

import {Flex} from '@chakra-ui/react';
import {RecipeItem} from './RecipeItem';

export const RecipeListPage = ({recipes, clickFn})=>{
  return (
    <Flex gap={8} w="50%" flexWrap="wrap" justify={'left'}>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} clickFn={clickFn} />
      ))}
    </Flex>
  );
};