<script>
    import { getWeatherData } from '../../services/weather-service.js';
    let cityName = '';

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const weatherData = await getWeatherData(cityName);
            console.log(weatherData);
        } catch (error) {
            console.error(error.message);
        }
    }
</script>

<form class="mb-4" on:submit={handleSubmit}>
    <div class="mb-3">
        <label for="cityName" class="form-label">Stadtname</label>
        <input type="text" class="form-control" id="cityName" placeholder="Stadtname eingeben" bind:value={cityName}>
    </div>
    <button type="submit" class="btn btn-primary">Wetter abrufen</button>
</form>
