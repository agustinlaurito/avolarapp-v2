'use client';

import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import {
	AutoComplete,
	AutoCompleteInput,
	AutoCompleteItem,
	AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

import AIRPORTS from '@/utils/AIRPORTS_LIST.json';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAutocompleteList } from "@/utils/api";
import { useAirportContext } from "@/app/context/airport";

function SearchAutocomplete() {

	const router = useRouter();
	const { setAirport } = useAirportContext()

	const [list, setList] = useState(AIRPORTS);

	useEffect(() => {

		getAutocompleteList(apts => setList(apts))

	}, []);

	return (
		<FormControl size="lg">
			<AutoComplete openOnFocus suggestWhenEmpty={false}>
				<AutoCompleteInput bg="white" variant='flushed' borderRadius="xl" shadow='table' fontSize={{ base: 'xs', md: 'md' }} placeholder="Ingresa un aeropuerto ..." pl={{ base: 2, md: 5 }} />
				<AutoCompleteList w='full'>
					{ list.map((airport, cid) => (
						<AutoCompleteItem
							onClick={() => { router.push(`/airport/${airport.localCode}`); setAirport(null)}}
							key={`option-${cid}`}
							value={airport.description}
							textTransform="capitalize"
						>
							{airport.description}
						</AutoCompleteItem>
					))}
				</AutoCompleteList>
			</AutoComplete>
		</FormControl>
	);
}

export default SearchAutocomplete;
