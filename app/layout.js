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
				<meta property="og:url" content="https://avolarapp.com.ar/"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="A Volar App"/>
				<meta property="og:description" content="A Volar te ofrece toda la información de un aeródromo, en un solo lugar."/>
				<meta property="og:image" content="https://live.staticflickr.com/2931/33467438925_d8a3f1b048_k.jpg"/>

				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="twitter:url" content="https://avolarapp.com.ar/"/>
				<meta name="twitter:title" content="A Volar App"/>
				<meta name="twitter:description" content="A Volar te ofrece toda la información de un aeródromo, en un solo lugar."/>
				<meta name="twitter:image" content=""/>
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
