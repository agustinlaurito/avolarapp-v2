'use client';

import { AspectRatio, Box, Button, Center, Divider, HStack, Heading, Icon, IconButton, Skeleton, Spacer, Spinner, Text, VStack } from "@chakra-ui/react";
import { TbBrandWindy } from 'react-icons/tb';
import { MdLocalAirport } from 'react-icons/md';
import { GiRadioTower } from 'react-icons/gi';
import { VscBookmark } from 'react-icons/vsc';
import { BsEye, BsCardChecklist, BsTelephone } from 'react-icons/bs';
import { RiGasStationFill } from 'react-icons/ri';
import { BiCommentDetail } from 'react-icons/bi';
import { useAirportContext } from "@/app/context/airport";
import ChartsModal from "./modals/ChartsModal";
import { useState } from "react";
import TelephonesModal from "./modals/TelephonesModal";
import FuelModal from "./modals/FuelModal";
import NormsModal from "./modals/NormsModal";
import HelpersModal from "./modals/HelpersModal";
import FrecuenciesModal from "./modals/FrecuenciesModal";
import ApronsModal from "./modals/ApronsModal";
import WindyModal from "./modals/WindyModal";

function AdditionalInfo() {

	const { airport } = useAirportContext();

	const [chartsOpen, setChartsOpen] = useState(false);
	const [telephonesOpen, setTelephonesOpen] = useState(false);
	const [fuelOpen, setFuelOpen] = useState(false);
	const [normsOpen, setNormsOpen] = useState(false);
	const [helpersOpen, setHelpersOpen] = useState(false);
	const [frecuenciesOpen, setFrecuenciesOpen] = useState(false);
	const [apronsOpen, setApronsOpen] = useState(false);
	const [windyOpen, setWindyOpen] = useState(false);


	if (!airport) return <Loader />

	return(
		<>
			{chartsOpen && <ChartsModal isOpen={chartsOpen} onClose={() => setChartsOpen(false)} /> }
			{telephonesOpen && <TelephonesModal isOpen={telephonesOpen} onClose={() => setTelephonesOpen(false)} />}
			{fuelOpen && <FuelModal isOpen={fuelOpen} onClose={() => setFuelOpen(false)} /> }
			{normsOpen && <NormsModal isOpen={normsOpen} onClose={() => setNormsOpen(false)} />}
			{helpersOpen && <HelpersModal isOpen={helpersOpen} onClose={() => setHelpersOpen(false)} />}
			{frecuenciesOpen && <FrecuenciesModal isOpen={frecuenciesOpen} onClose={() => setFrecuenciesOpen(false)} />}
			{apronsOpen && <ApronsModal isOpen={apronsOpen} onClose={() => setApronsOpen(false)} />}
			{windyOpen && <WindyModal isOpen={windyOpen} onClose={() => setWindyOpen(false)} />}


			<VStack shadow="2xl" h="100%" w="100%" bg="white" alignItems="center" rounded="3xl">

				<Heading color="brand.text" size='2xl' py='5'>Info</Heading>

				<Box w='90%' h='20%'>
					<iframe
						width='100%'
						height='100%'
						src={`https://maps.google.com/maps?width=100%25&hl=es&q=${airport.geometry.coordinates.lat},${airport.geometry.coordinates.lng}&z=15&t=h&output=embed`}
					/>
				</Box>
				<VStack w='100%' minH='50%' py='3'>
					{
						(airport.aip.charts?.length || airport.aip.ad?.length)  &&
							<Button onClick={() => setChartsOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={VscBookmark} boxSize='8' color='brand.text' />}>Cartas | AIP</Button>
					}
					{
						airport.telephones?.length &&
							<Button onClick={() => setTelephonesOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={BsTelephone} boxSize='8' color='brand.text' />}>Telefonos</Button>
					}
					{
						airport.fuel &&
							<Button onClick={() => setFuelOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={RiGasStationFill} boxSize='8' color='brand.text' />}>Combustible</Button>
					}
					{
						airport.norms?.length &&
							<Button onClick={() => setNormsOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={BsCardChecklist} boxSize='8' color='brand.text' />}>Normas</Button>
					}
					{
						airport.helpers?.length &&
							<Button onClick={() => setHelpersOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={BsEye} boxSize='8' color='brand.text' />}>Ayudas</Button>
					}
					{
						airport.ats?.length &&
							<Button onClick={() => setFrecuenciesOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={GiRadioTower} boxSize='8' color='brand.text' />}>Frecuencias</Button>
					}
					{
						airport.aprons && (airport.aprons.taxiways.length || airport.aprons.aprons.length) &&
							<Button onClick={() => setApronsOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={MdLocalAirport} boxSize='8' color='brand.text' />}>Plataformas</Button>
					}
					<Button onClick={() => setWindyOpen(true)} size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={TbBrandWindy} boxSize='8' color='brand.text' />}>Windy</Button>
					{/* <Button size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={BiCommentDetail} boxSize='8' color='brand.text' />}>Comentarios</Button> */}
					{/* <Button size='lg' gap='3' variant='outline' w='90%' justifyContent='flex-start' color='brand.text' leftIcon={<Icon as={PiNewspaper} boxSize='8' color='brand.text' />}>Notams</Button> */}
				</VStack>

			</VStack>
		</>

	)

};

export default AdditionalInfo;

function Loader() {

	return (
		<VStack h={{ base: '80vh', md: '100%' }} w="100%" >
			<Skeleton height="100%" width="100%" rounded="3xl" />
		</VStack>

	)

};

