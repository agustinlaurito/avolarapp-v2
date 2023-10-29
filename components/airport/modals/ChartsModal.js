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
} from '@chakra-ui/react';
import Link from "next/link";

import { MdOutlineOpenInNew } from "react-icons/md";


function ChartsModal({ isOpen , onClose}) {

	const { airport } = useAirportContext();

	return(
		<Modal size='6xl' isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent mx={{ base: 5, md: 0}}>
				<ModalHeader textAlign="center">
					<Heading color="brand.text">Cartas</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody my='5' mx='5'>
					<VStack justifyContent="center" gap='5'>
						{
							airport.aip.charts.map((chart, index) =>
								<Button onClick={() => window.open(chart.href, "_blank")} w='full' key={index} variant='outline' colorScheme='brand.accent' size='lg' leftIcon={<Icon as={MdOutlineOpenInNew} />}>{chart.text}</Button>
							)
						}
					</VStack>
					<VStack justifyContent="center" gap='5'>
						{
							airport.aip.ad.map((chart, index) =>
								<Button onClick={() => window.open(chart.href, "_blank")} w='full' key={index} variant='outline' colorScheme='brand.accent' size='lg' leftIcon={<Icon as={MdOutlineOpenInNew} />}>{chart.text}</Button>
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

export default ChartsModal;
