const apiKey = '7eb89794063ff124eee3ab9fc63d3056';

export async function getWeatherData(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=de&units=metric`;

    try {
        const response = await fetch(apiUrl);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('API-Aufruf fehlgeschlagen');
        }
    } catch (error) {
        throw new Error('Fehler beim API-Aufruf: ' + error.message);
    }
}
