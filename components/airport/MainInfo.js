'use client';

import { Box, Center, Divider, HStack, Stack, Heading, Icon, Spacer, Spinner, Text, VStack } from "@chakra-ui/react";
import WeatherIcon from "./metar/WeatherIcon";
import SVGRunway from "./runways/SVGRunway";
import { PiWarningCircleLight } from 'react-icons/pi';
import { useAirportContext } from "@/app/context/airport";

function MainInfo() {

	const { airport } = useAirportContext();

	if (!airport) return <Skeleton />


	const windDirection = airport.metar?.parsed?.wind?.direction || airport.closestAirport?.metar?.parsed?.wind?.direction || '';


	let metar = airport.metar;
	let externalMetar = false;

	if(!metar || Object.keys(metar).length === 0) {
		externalMetar = true;
		metar = airport.closestAirport.metar;
	}

	const taf = airport.taf || airport.closestAirport.taf;


	return(
		<VStack shadow="2xl" h="100%" w="100%" bg="white" rounded="3xl">

			<Heading color='brand.text' textAlign='center' size={{ base: 'md',lg:'lg', xl: 'xl' }} p='5'>{airport.shortName}</Heading>

			<Stack w='90%' direction='row' justify='center' gap='5'>
				{
					airport.runways.map((runway, index) =>
						<VStack rounded="3xl" py='4' px='2' border="3px solid rgba(76, 85, 108, 0.5)" key={index}>
							<Heading size="lg" color="brand.text">{runway.numbers}</Heading>
							<Box transform={`rotate(${runway.numbers.split('/')[1]}0deg)`}>
								<SVGRunway isClosed={String(runway.surface).toUpperCase().includes("CERRADA", "CLOSED", "CLSD")} isGrass={runway.surface.toUpperCase().includes("TIERRA")} runways={runway.numbers.split('/')} windDirection={metar ? windDirection - runway.numbers.split('/')[0] : null} />
							</Box>
							<Text textAlign="center" fontWeight="bold">{runway.width}</Text>
							<Text textAlign="center" color="brand.text">{runway.surface}</Text>
						</VStack>
					)
				}
			</Stack>


			<VStack boxShadow='table' w='90%' rounded="xl" bg="brand.accent.500" p="6" textAlign='center' m="5">
				{
					!metar ?
						<HStack>
							<Icon as={PiWarningCircleLight} color="white" boxSize={10} mr='5' />
							<Heading size="lg" color="white">Sin datos de METAR</Heading>
						</HStack>
					:
					<>
						<WeatherIcon metar={metar} props={{ color: "white", boxSize: { base: '20', xl: '36'} }} />
						<Heading size={{ base: 'md', xl: 'lg'}} color="white">{metar.raw}</Heading>
						<Text color='darkAlpha.400' fontWeight='bold'>{taf}</Text>
						{
								externalMetar && <Text color="white" fontWeight=''>Usando METAR mas cercano {airport.closestAirport.oaciCode} | {airport.closestAirport.localCode} - {Math.round(airport.closestAirport.distance)} NM de distancia</Text>
						}
					</>

				}

			</VStack>

		</VStack>
	)
}

export default MainInfo;

function Skeleton() {

	return (
		<VStack shadow="2xl" h="100%" w="100%" bg="white" rounded="3xl">
			<Center h='60%'>
				<Spinner color="brand.500" size="xl" />

			</Center>
			<Center w='90%' rounded="xl" bg="brand.accent.500" h='40%' p="6" textAlign='center' m="5">
				<Spinner color="brand.500" size="xl" />
			</Center>
		</VStack>

	)

};
