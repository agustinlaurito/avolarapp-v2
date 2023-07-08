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
} from '@chakra-ui/react';


function FuelModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0 }}>
				<ModalHeader textAlign="center">
					<Heading color="brand.text">Combustible</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5'>
					<Text color='brand.text' fontSize='xl' textAlign='center' w='90%'>
						{airport.fuel}
					</Text>
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

export default FuelModal;
