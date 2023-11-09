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
	VStack,
	Icon,
	Text,
	Stack,
	HStack,
	Image,
	Spacer,
	IconButton,
} from '@chakra-ui/react';
import Link from "next/link";

import { MdOutlineOpenInNew } from "react-icons/md";
import { BsTelephoneForward } from 'react-icons/bs';


function TelephonesModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0 }}>
				<ModalHeader textAlign="center">
					<Heading color="brand.text">Telefonos</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5'>
					<VStack justifyContent="center" gap='8'>
						{
							airport.telephones.map((telephone,index) =>
								<HStack border='1px solid rgba(76, 85, 108, 0.5)' rounded='xl' p='2' key={index} w='100%'>
									<Image src='/images/MADHEL.png' alt='MADHEL' boxSize='12' mr='2' />
									<VStack alignItems='flex-start'>
										<Text fontWeight='bold' color='brand.text'>{telephone.type || 'No Especificado'}</Text>
										<Text fontSize='xs' color='blackAlpha.800'>{telephone.number}</Text>
									</VStack>
									<Spacer />
									<IconButton colorScheme="brand.accent" >
										<Icon as={BsTelephoneForward} />
									</IconButton>
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

export default TelephonesModal;
