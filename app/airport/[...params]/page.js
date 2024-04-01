'use client';

import { useAirportContext } from "@/app/context/airport";
import Footer from "@/components/Home/Footer";
import SearchAutocomplete from "@/components/SearchAutocomplete";
import AdditionalInfo from "@/components/airport/AdditionalInfo";
import BasicInfo from "@/components/airport/BasicInfo";
import MainInfo from "@/components/airport/MainInfo";
import Nav from "@/components/airport/Nav";
import { getAirportByLocalCode } from "@/utils/api";
import { Box, HStack, Spacer, VStack, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Page({ params }) {

	const localCode = params.params[0];
	const { airport, setAirport } = useAirportContext();

	const isMobile = useBreakpointValue({ base: true, md: true, lg: false });


	useEffect(() => {

		getAirportByLocalCode(localCode).then(airport => { setAirport(airport); console.log(airport) });

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return(
		<VStack w='100%'>
			<VStack w='100%' minHeight="100vh" height={isMobile ? '100%' : '100vh'} bgGradient='linear(to-r, rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2%)'>

				<Nav />

				<HStack py={{ base: 6, md: 2, xl: 6 }} h="100%" alignItems="flex-start" w="100%" px="5" gap={5} flexWrap={isMobile ? 'wrap' : 'nowrap'}>
					<Box h="100%" flex={isMobile ? "100%" : "20%"}>
						<BasicInfo />
					</Box>
					<Box h="100%" flex={isMobile ? "100%" : "60%"}>
						<MainInfo />
					</Box>
					<Box h="100%" flex={isMobile ? "100%" : "20%"}>
						<AdditionalInfo />
					</Box>
				</HStack>

			</VStack>
			<Footer />
		</VStack>
	)

}

export default Page;
