'use client'

import { Center, Divider, HStack, Heading, Icon, Spacer, Spinner, Text, VStack } from "@chakra-ui/react";

import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiRadar, BiCurrentLocation } from 'react-icons/bi';
import { MdHeight, MdLocalAirport } from 'react-icons/md';
import { ImAccessibility } from 'react-icons/im';
import { useAirportContext } from "@/app/context/airport";

function BasicInfo() {

	const { airport } = useAirportContext();

	if(!airport) return <Skeleton />

	return(
		<VStack shadow="2xl" h="100%" w="100%" bg="brand.accent.500" rounded="3xl">
			<Center p={{base: '20', md: ''}} roundedTop="3xl" bg='white' w="100%" h={{ base: '15%', xl: '100%' }} textAlign="center">
				<Heading justifySelf="center" color="brand.text" size="3xl">{airport.localCode}</Heading>
			</Center>

			<VStack h="100%" alignItems="flex-start" w="100%" px="5">

				{
					!(airport.oaciCode && airport.iataCode) ? null :
					<>
						<HStack py="2" color="white">
							<Icon boxSize={{ base: 8 }} as={MdLocalAirport} />
							<VStack alignItems="flex-start" gap="0">
								<Heading fontSize={{ base: '3xl', md: 'xl' ,xl: '3xl' }}>{airport.oaciCode + " | " + airport.iataCode}</Heading>
								<Text fontSize={{ base: 16, md: 'sm', xl: 16 }} fontWeight="bold">{"OACI | IATA"}</Text>
							</VStack>
						</HStack>
						<Divider opacity=".2" w="55%" placeSelf="center" />
					</>

				}

				<HStack py="2" color="white">
					<Icon boxSize={{ base: 8 }} as={FaMapMarkerAlt} />
					<Heading fontSize={{ base: '3xl', md: 'xl', xl: '3xl' }}>{airport.region}</Heading>
				</HStack>

				<Divider opacity=".2" w="55%" placeSelf="center" />

				<HStack py="2" color="white">
					<Icon boxSize={{ base: 8 }} as={BiRadar} />
					<VStack alignItems="flex-start" gap="0">
						<Heading fontSize={{ base: '3xl', md: 'xl', xl: '3xl' }}>{airport.fir.code}</Heading>
						<Text  fontSize={{ base: 16, md: 'sm', xl: 16 }} fontWeight="bold">{airport.fir.name}</Text>
					</VStack>
				</HStack>

				<Divider opacity=".2" w="55%" placeSelf="center" />

				<HStack py="2" color="white">
					<Icon boxSize={{ base: 8 }} as={MdHeight} />
					<VStack alignItems="flex-start" gap="0">
						<Heading fontSize={{ base: '3xl', md: 'xl', xl: '3xl' }}>{Math.trunc(airport.elevation * 3.281) + "Ft"}</Heading>
						<Text fontSize={{ base: 16, md: 'sm', xl: 16 }} fontWeight="bold">{Math.trunc(airport.elevation) + "Mts"}</Text>
					</VStack>
				</HStack>

				<Divider opacity=".2" w="55%" placeSelf="center" />

				<HStack py="2" color="white">
					<Icon boxSize={{ base: 8 }} as={ImAccessibility} />
					<VStack alignItems="flex-start" gap="0">
						<Heading fontSize={{ base: '3xl', md: 'xl', xl: '3xl' }}>{airport.public ? "Público " : "Privado "}</Heading>
						<Text fontSize={{ base: 16, md: 'sm', xl: 16 }} fontWeight="bold">{airport.controlled ? "Controlado" : "No controlado"}</Text>
					</VStack>
				</HStack>

				<Divider opacity=".2" w="55%" placeSelf="center" />

				<HStack py="2" color="white">
					<Icon boxSize={{ base: 8 }} as={BiCurrentLocation} />
					<VStack gap="0" alignItems="flex-start">
						<Heading fontSize={{ base: '3xl', md: 'xl', xl: '3xl' }}>{airport.geometry.coordinates.lat.toFixed(2) + "," + airport.geometry.coordinates.lng.toFixed(2)}</Heading>
						<Text fontSize={{ base: 16, md: 'sm', xl: 16 }} fontWeight="bold">{airport.coordinates[0] + " , " + airport.coordinates[1]} </Text>
					</VStack>
				</HStack>

				<Divider opacity=".2" w="55%" placeSelf="center" />

			</VStack>
		</VStack>
	)

}

export default BasicInfo;

function Skeleton() {

	return(
		<VStack shadow="2xl" h={{ base: '80vh', md: '100%' }} w="100%" bg="brand.accent.500" rounded="3xl">
			<Center roundedTop="3xl" bg='white' w="100%" h="40%" textAlign="center">
				<Spinner color="brand.500" size="xl" />
			</Center>

			<Center h="100%" w="60%">

				<Spinner color="brand.500" size="xl" />

			</Center>
		</VStack>

	)

};
