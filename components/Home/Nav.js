'use client'

import { useState, useEffect } from 'react';
import {
	Text,
	Flex,
	Spacer,
	IconButton,
	useColorMode,
	useColorModeValue,
	useMediaQuery,
	Image,
	Button,
	HStack,
	Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { Icon } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

function getCurrentZuluTime() {
	const date = new Date();
	const options = { day: "numeric", month: "long", timeZone: "UTC" };
	const dayMonth = date.toLocaleDateString("es-ES", options);
	const time = date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", timeZone: "UTC" });
	return `${time}`;
}

const Nav = () => {

	const router = useRouter();

	const [scroll, setScroll] = useState(false);
	const [zuluTime, setZuluTime] = useState(getCurrentZuluTime());
	const { colorMode, toggleColorMode } = useColorMode();
	const navBg = useColorModeValue('white', 'blackAlpha.200');
	const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

	const changeScroll = () =>
		document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
			? setScroll(true)
			: setScroll(false);


	useEffect(() => {

		window.addEventListener('scroll', changeScroll);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setZuluTime(getCurrentZuluTime());
		}, 1000);

		return () => clearInterval(interval); // Clean up the interval on unmount
	}, []);

	return (
		<Flex
			h="8vh"
			alignItems="center"
			p="4"
			boxShadow={scroll ? 'base' : 'none'}
			position="sticky"
			top="0"
			zIndex="sticky"
			w="full"
			bg={navBg}
		>
			<Link href='/'>
				<HStack>
					<Image src="/images/logo.png" alt="logo" boxSize='35px' />
					{isLargerThanMD && <Text fontSize={{ base: 'sm', md: 'xl' }} color="brand.text" fontWeight="bold">
						A Volar App
					</Text>}
				</HStack>
			</Link>
			<Spacer/>

			<Flex alignItems="center" gap='2'>

				<Text fontWeight="semibold" color="brand.text" fontSize={{base: 'xs', md: 'md'}}>Proximamente!</Text>
				<Button isDisabled colorScheme='brand.accent' variant='solid' mr={{ base: '0', md: '2' }} size={{ base: 'xs', md: 'md' }}>Ir a Mi Libro de Vuelo</Button>

				<Spacer />

				<Text fontWeight="semibold" fontSize={{ base: 'xs', md: 'md' }}>{zuluTime}Z</Text>
			</Flex>
		</Flex>
	);
};

export default Nav;
