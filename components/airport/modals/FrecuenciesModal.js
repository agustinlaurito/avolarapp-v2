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
	Image,
	Spacer,
	Icon,
	VStack,
	IconButton,
	HStack
} from '@chakra-ui/react';


function FrecuenciesModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal size='3xl' isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0 }}>
				<ModalHeader textAlign="center">
					<Heading  color="brand.text">Frecuencias</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5'>
					<VStack>
						{
							airport.ats.map((frecuencie, index) =>
								<HStack border='1px solid rgba(76, 85, 108, 0.5)' rounded='xl' p='2' key={index} w='100%'>
									<Image src='/images/MADHEL.PNG' alt='MADHEL' boxSize='12' mr='2' />
									<VStack alignItems='flex-start'>
										<Heading fontSize='lg' fontWeight='bold' color='brand.text'>{frecuencie.frequency[0] || 'No Especificado'} - {frecuencie.dependency || 'No Especificado'}</Heading>
										<Text fontSize='xs' fontWeight='bold' color='brand.text'>{frecuencie.description}</Text>
									</VStack>
									<Spacer />
								</HStack>

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

export default FrecuenciesModal;
