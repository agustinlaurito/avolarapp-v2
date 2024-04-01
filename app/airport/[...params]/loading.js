'use client';

import { VStack, HStack, Box , Center, Spinner, useBreakpointValue, Skeleton} from "@chakra-ui/react";
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

function Loading() {

	const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

	return(
		<VStack w='100%'>
			<VStack w='100%' minHeight="100vh" height={isMobile ? '100%' : '100vh'} bgGradient='linear(to-r, rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2%)'>

				<Nav />

				<Center h='100%' w='100%'>
					<Skeleton height='100%' width='100%' />
				</Center>

			</VStack>
			<Footer />
		</VStack>
	);
};

export default Loading;
