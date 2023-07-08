'use client';

import { Flex, Text, Link, HStack, Image, Box, VStack, Spacer, Center, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {


	const isMobile = useBreakpointValue({ base: true, md: false });


	return (
		<HStack
			w="full"
			bg="white"
			minHeight="10vh"
			alignItems="center"
			textAlign="center"
			px='5'
		>
			<HStack>
				<Text fontSize={{ base: 'xs', md: 'md' }} color="brand.text">
					Aplicacion hecha por {' '}
					<Link href="https://www.linkedin.com/in/agustinlaurito/" isExternal color="blue.500">
						Agustin Laurito
					</Link>
				</Text>
			</HStack>

			<Spacer />

			<Image boxSize='25px' src='/images/logo.png' alt='logo' />




			{!isMobile  &&
				<>
					<Spacer />
					<Link href='https://aerobot.com.ar' isExternal>
						<HStack align='center'>
							<Text fontSize={{ base: 'xs', md: 'md' }} color='brand.text' fontWeight='bold' mt='1'>Sponsoreado por </Text>
							<Center boxSize='65px'>
								<Image src='/images/aerobot.png' alt='logo' />
							</Center>
						</HStack>
					</Link>
				</>
			}

		</HStack>
	);
};

export default Footer;
