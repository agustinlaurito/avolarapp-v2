'use client';

import { Box, Container, Flex, HStack, Image, Select, Spacer, Text, VStack } from "@chakra-ui/react";
import SearchAutocomplete from "@/components/SearchAutocomplete";
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";

function Page() {

	return (
		<VStack>
			<Box w='100%' h='100vh'>
				<Nav />
				<VStack w='100%' h='100%' bgSize='cover' bgImage={{ base:'/images/background-mobile.jpg', md: '/images/background-pc.jpg'}} >
					<Spacer />
					<VStack mb='24'>
						<Text color="white" fontWeight="bold" fontSize={{base: '4xl', md:'8xl'}} textShadow="3px 4px 7px rgba(21, 46, 81, 0.4)">
							A donde volas hoy?
						</Text>
						<SearchAutocomplete />
					</VStack>
					<Spacer />
				</VStack>
			</Box>

			<Footer />
		</VStack>

	)
}

export default Page;
