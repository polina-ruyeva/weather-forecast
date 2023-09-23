//const apiKey = '7eb89794063ff124eee3ab9fc63d3056';
const apiKey = '9562303699afeed5479d26d8b8dc9e09';

export async function getWeatherData(cityName) {
    const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=de&units=metric`;

    try {
        let response = await fetch(apiUrlForecast);

        if (response.ok) {
            const data = await response.json();
            const { lon, lat } = data.city.coord;

            const apiUrlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&lang=de&units=metric`;
            const oneCallResponse = await fetch(apiUrlOneCall);

            if (oneCallResponse.ok) {
                const oneCallData = await oneCallResponse.json();
                return oneCallData;
            } else {
                throw new Error('API-Aufruf für apiUrlOneCall fehlgeschlagen');
            }
        } else {
            throw new Error('API-Aufruf für apiUrlForecast fehlgeschlagen');
        }
    } catch (error) {
        throw new Error('Fehler beim API-Aufruf: ' + error.message);
    }
}

