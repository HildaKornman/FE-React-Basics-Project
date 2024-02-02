const caramels = {
	id: self.crypto.randomUUID(),
	label: 'Paleo Chocolate Covered Caramels',
    image: 'https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg',
    alt: `Picture of Paleo Chocolate Covered Caramels`,
};

const porkchops = {
	id: self.crypto.randomUUID(),
	label: 'Grilled Pork Chops with Chipotle Sauce',
    image: 'https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg',
    alt: `Picture of Grilled Pork Chops with Chipotle Sauce`,
};

const turkeysandwich = {
	id: self.crypto.randomUUID(),
	label: 'Slow Cooker Turkey Dip Sandwiches recipes',
	image: 'https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg',
	alt: `Picture of Slow Cooker Turkey Dip Sandwiches recipes`,
};

const cocktail = {
	id: self.crypto.randomUUID(),
	label: 'Blueberry Basil Margarita Cocktail recipes',
	image: 'https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg',
	alt: `Picture of Blueberry Basil Margarita Cocktail recipes`,
};
      
const potatogratin = {
	id: self.crypto.randomUUID(),
	label: 'Potato Gratin',
	image: 'https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp',
	alt: `Picture of Potato Gratin`,
};

const casserole = {
	id: self.crypto.randomUUID(),
	label: 'Seafood Casserole',
	image: 'https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg',
	alt: `Picture of Seafood Casserole`,
};

export const availableRecipes = [
	caramels,
	porkchops,
	turkeysandwich,
	cocktail,
	potatogratin,
	casserole,
];