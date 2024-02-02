/* eslint-disable */

import {Flex} from '@chakra-ui/react';
import {RecipeItem} from './RecipeItem';

export const RecipeListPage = ({recipes, onClick})=>{
  return (
    <Flex 
      gap={8} 
      w={['full', '755']}
      flexWrap="wrap" 
      justify="center"
      alignItems="center"
    >
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} onClick={onClick} />
      ))}
    </Flex>
  );
};
