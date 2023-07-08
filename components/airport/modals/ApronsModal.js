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
	Spacer,
} from '@chakra-ui/react';


function ApronsModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal size='3xl' isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0 }}>
				<ModalHeader textAlign="center">
					<Heading color="brand.text">Plataformas y Taxiways</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5'>
					<VStack>
						<VStack alignItems='flex-start' w='90%' my='2'>
							<Heading color="brand.text">Taxiways</Heading>
							<VStack ml='2' gap='3' alignItems='flex-start'>
								{
									airport.apronTwy.taxiways.map((text, index) =>
										<Text key={index}>- {text}</Text>
									)
								}
							</VStack>
							<Spacer />
							<Heading color="brand.text">Aprons</Heading>
							<VStack ml='2' gap='3' alignItems='flex-start'>
								{
									airport.apronTwy.aprons.map((text, index) =>
										<Text key={index}>- {text}</Text>
									)
								}
							</VStack>
						</VStack>
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

export default ApronsModal;
