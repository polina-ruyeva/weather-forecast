const apiKey = '9562303699afeed5479d26d8b8dc9e09';

async function fetchForecastData(cityName) {
	const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=de&units=metric`;
	const response = await fetch(apiUrlForecast);

	if (!response.ok) {
		throw new Error('API call for apiUrlForecast failed');
	}

	return await response.json();
}

async function fetchOneCallData(lon, lat) {
	const apiUrlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&lang=de&units=metric`;
	const response = await fetch(apiUrlOneCall);

	if (!response.ok) {
		throw new Error('API call for apiUrlOneCall failed');
	}

	return await response.json();
}

export async function getWeatherData(cityName) {
	try {
		const forecastData = await fetchForecastData(cityName);
		const { lon, lat } = forecastData.city.coord;
		const oneCallData = await fetchOneCallData(lon, lat);
		return oneCallData;
	} catch (error) {
		throw new Error('API call error: ' + error.message);
	}
}
