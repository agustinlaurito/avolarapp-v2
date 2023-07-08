'use client'

import { createContext, useContext, useState } from "react";

const AirportContext = createContext({});

export const AirportContextProvider = ({ children }) => {
	const [airport, setAirport] = useState(null);

	return (
		<AirportContext.Provider value={{ airport, setAirport }}>
			{children}
		</AirportContext.Provider>
	);
};

export const useAirportContext = () => useContext(AirportContext);
