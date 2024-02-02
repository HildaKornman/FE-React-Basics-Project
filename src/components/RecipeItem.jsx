/* eslint-disable */

import {Center, Image, Text, WrapItem} from '@chakra-ui/react';

export const RecipeItem = ({ recipe, onClick }) => {
	return (
		<WrapItem>
			<Center gap={8} cursor={'pointer'} onClick={() => onClick(recipe)}>
				<Image 
					src={recipe.image} 
					w={50} 
					h={50} 
					borderRadius={'xl'}
					alt={recipe.alt} 
				/>
				<Text fontWeight={'450'}>{recipe.label}</Text>
			</Center>
		</WrapItem>
	);
};
