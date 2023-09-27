'use client';

import { VStack, HStack, Box , Center, Spinner, useBreakpointValue} from "@chakra-ui/react";
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

function Loading() {

	const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

	return(
		<VStack w='100%'>
			<VStack w='100%' minHeight="100vh" height={isMobile ? '100%' : '100vh'} bgGradient='linear(to-r, rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2%)'>

				<Nav />

				{/* <HStack py={{ base: 6, md: 2, xl: 6 }} h="100%" alignItems="flex-start" w="100%" px="5" gap={5} flexWrap={isMobile ? 'wrap' : 'nowrap'}>
					<Box h="100%" flex={isMobile ? "100%" : "20%"}>
						<VStack shadow="2xl" h={{ base: '80vh', md: '100%' }} w="100%" bg="brand.accent.500" rounded="3xl">
							<Center roundedTop="3xl" bg='white' w="100%" h="40%" textAlign="center">
								<Spinner color="brand.500" size="xl" />
							</Center>

							<Center h="100%" w="60%">

								<Spinner color="brand.500" size="xl" />

							</Center>
						</VStack>
					</Box>
					<Box h="100%" flex={isMobile ? "100%" : "60%"}>
						<VStack shadow="2xl" h={{ base: '80vh', md: '100%' }} w="100%" bg="brand.accent.500" rounded="3xl">
							<Center h='60%'>
								<Spinner color="brand.500" size="xl" />

							</Center>
							<Center w='90%' rounded="xl" bg="brand.accent.500" h='40%' p="6" textAlign='center' m="5">
								<Spinner color="brand.500" size="xl" />
							</Center>
						</VStack>
					</Box>
					<Box h="100%" flex={isMobile ? "100%" : "20%"}>
						<VStack shadow="2xl" h={{ base: '80vh', md: '100%' }} w="100%" bg="brand.accent.500" rounded="3xl">
							<Center roundedTop="3xl" bg='white' w="100%" h="40%" textAlign="center">
								<Spinner color="brand.500" size="xl" />
							</Center>

							<Center h="100%" w="60%">

								<Spinner color="brand.500" size="xl" />

							</Center>
						</VStack>
					</Box>
				</HStack> */}
				<Center h='100%' w='100%'>
					<Spinner color="white" size="xl" />
				</Center>

			</VStack>
			<Footer />
		</VStack>
	);
};

export default Loading;
