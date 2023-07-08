'use client';

import { useAirportContext } from "@/app/context/airport";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react';


function NormsModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal size='3xl' isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0 }}>
				<ModalHeader textAlign="center">
					<Heading  color="brand.text">Normas</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5'>
					<VStack w='90%' alignItems='flex-start'>
						{
							airport.norms.map((norm, index) =>
								<VStack alignItems='flex-start' my='2' key={index}>
									<Heading color="brand.text">{norm.type}</Heading>
									<Text color="brand.text">{norm.content}</Text>
								</VStack>
							)
						}
					</VStack>
				</ModalBody>

				<ModalFooter justifyContent="center">
					<Button colorScheme='brand.accent' onClick={onClose}>
						Cerrar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)

}

export default NormsModal;
