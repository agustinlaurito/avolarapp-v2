const API_ENDPOINT = 'https://airportsmicroservice-production.up.railway.app';
// const API_ENDPOINT = 'http://localhost:3001';

async function getHeaders() {

	return {
		"x-api-key": "4f9bf0c1-d119-4520-9987-a0222a8c194b",
	};
};

async function checkResponseStatus(response) {

	if (!response.ok) {
		throw new Error(`${response.status}`);
	}
	return response.json();
}

export async function getAirportByLocalCode(localCode) {

	const headers = await getHeaders();

	const response = await fetch(`${API_ENDPOINT}/airports/list?with=madhel,metar,taf,aip&filters=localCode eq ${localCode}&pageSize=6000`, {
		headers
	});

	const data = await checkResponseStatus(response);

	return data[0];
}

export async function getAutocompleteList() {

	const headers = await getHeaders();

	const response = await fetch(`${API_ENDPOINT}/airports/autocompleteQuery?pageSize=6000`, {
		headers
	});

	const data = await checkResponseStatus(response);

	return data[0];
}

// with: madhel, metar, taf, aip
// filters: localCode eq ATE
// pageSize: 6000
