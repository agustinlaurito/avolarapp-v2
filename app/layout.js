'use client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/utils/theme';
import { AirportContextProvider } from './context/airport';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="A Volar App" />
				<title>A Volar App</title>
				<link rel="icon" href="/favicon.ico" />
				{/* Add any necessary CSS or JavaScript files */}
			</head>
			<body>
				<ChakraProvider theme={theme}>
					<AirportContextProvider>
						{children}
					</AirportContextProvider>
				</ChakraProvider>
			</body>
		</html>
	);
};
