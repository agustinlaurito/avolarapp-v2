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


function HelpersModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal size='3xl' isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0 }}>
				<ModalHeader textAlign="center">
					<Heading  color="brand.text">Ayudas</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5'>
					<VStack>
						{
							airport.helpers.map((helper, index) =>
								<VStack key={index} align='flex-start' w='90%'>
									<Heading color='brand.text' >{helper.type}</Heading>
									<VStack>
									{	helper.helpers.map(text =>
											<Text key={index}>
												{text}
											</Text>)}
									</VStack>
								</VStack>)
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

export default HelpersModal;
