/* eslint-disable */

import {
	Center,
	Flex,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import {Button} from './ui/Button';

export const RecipeChoice = ({recipe, clickFn})=>{
	const {isOpen, onOpen, onClose}=useDisclosure();

	return (
		<Center flexDir={'column'} gap={4}>
			<Heading fontSize={'2xl'} color="grey.600">
				Your choice: {recipe.label}
			</Heading>
			<Image
				src={recipe.image} 
				w={100} 
				h={100}
				borderRadius={'2xl'}
				alt={recipe.alt} 
			/>
			<Text>Your recipe can be prepared soon</Text>
			<Flex mt={4}>
				<Button onClick={onOpen} mr={4}>
					Confirm order
				</Button>
				<Button onClick={() => clickFn()} variant="ghost">
					Change selection
				</Button>
			</Flex>

			<Modal isOpen={isOpen} onclose={onClose}>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Confirm your order</ModalHeader>
					<ModalCloseButton/>
					<ModalBody>
						<Text>1x {recipe.label}</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="teal" mr={4}>
							Confirm
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Center>
	);
};