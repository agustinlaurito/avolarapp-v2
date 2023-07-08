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
	Box,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { Icon } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import SearchAutocomplete from '../SearchAutocomplete';
import Link from 'next/link';

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
	const navBg = useColorModeValue('white', 'blackAlpha.500');
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
			shadow='table'
			bg={navBg}
		>
			<Link href='/'>
				<HStack>
					<Image src="/images/logo.png" alt="logo" boxSize='35px' mr="5" />
					{isLargerThanMD && <Text fontSize={{ base: 'sm', md: 'xl' }} color="brand.text" fontWeight="bold">
						A Volar App
					</Text>}
				</HStack>
			</Link>

			<Spacer />

			<Box w={{base: '55%', md: '60%'}}>
				<SearchAutocomplete />
			</Box>

			<Spacer />

			<Flex alignItems="center" gap='2'>
				<HStack gap="5" p="2">
					<Text fontWeight="semibold" fontSize={{ base: 'xs', md: 'md' }}>{zuluTime}Z</Text>
				</HStack>
			</Flex>
		</Flex>
	);
};

export default Nav;
