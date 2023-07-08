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
	Center,
} from '@chakra-ui/react';


function WindyModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal size='3xl' isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0 }}>
				<ModalHeader textAlign="center">
					<Heading color="brand.text">Windy</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5'>
					<Center w='100%' h='60vh'>
						<iframe
							width='100%'
							height='100%'
							title="windy"
							src={`https://embed.windy.com/embed2.html?lat=${airport.geometry.coordinates.lat.toFixed(2)}&lon=${airport.geometry.coordinates.lng.toFixed(2)}&width=650&height=450&zoom=9&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`}
						>
						</iframe>
					</Center>


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

export default WindyModal;
