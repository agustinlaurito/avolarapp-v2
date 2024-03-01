'use client';

import { Flex, FormControl, FormHelperText, FormLabel, Icon, IconButton, InputGroup, InputRightElement, useToast } from "@chakra-ui/react";
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
import { BiSearch } from "react-icons/bi";

function SearchAutocomplete() {

	const router = useRouter();
	const toast = useToast();
	const { setAirport } = useAirportContext();

	const [value, setValue] = useState('');

	const [list, setList] = useState(AIRPORTS);

	const onSearch = () => {

		const airportExists = list.find(entry => entry.localCode === value || entry.iataCode === value || entry.oaciCode === value);

		if(airportExists) {

			router.push(`/airport/${airportExists.localCode}`);
		}
		else {

			toast({
				title: 'Aeropuerto no encontrado.',
				status: 'error',
				duration: 2000,
				isClosable: true,
			});
		}


	};

	useEffect(() => {

		getAutocompleteList(apts => setList(apts))

	}, []);

	return (
		<FormControl size="lg">
			<AutoComplete suggestWhenEmpty={false} listAllValuesOnFocus={false}>
				<InputGroup size={'lg'}>
					<AutoCompleteInput _focus={{ boxShadow: 'var(--chakra-shadows-table);' }} value={value} onChange={e => setValue(e.target.value)} bg="white" variant='flushed' borderRadius="xl" shadow='table' fontSize={{ base: 'xs', md: 'md' }} placeholder="Ingresa un aeropuerto ..." pl={{ base: 2, md: 5 }} />

					<InputRightElement>
						<IconButton colorScheme={'brand.info'} roundedLeft={'0'} onClick={onSearch} size={'lg'} icon={<Icon as={BiSearch} />} />
					</InputRightElement>
				</InputGroup>
				<AutoCompleteList w='full'>
					{ list.map((airport, cid) => (
						<AutoCompleteItem
							onClick={() => { setValue(airport.oaciCode || airport.iataCode || airport.localCode) }}
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
