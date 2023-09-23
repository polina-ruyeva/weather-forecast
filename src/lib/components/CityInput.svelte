<script>
	import { getWeatherData } from '../../services/weather-service.js';
	import WeatherForecastList from './WeatherForecastList.svelte';
	import WeatherForecastToday from './WeatherForecastToday.svelte';

	let cityName = '';
	let weatherData;
	let forecast5DaysData;
	let forecastTodayData;

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			weatherData = await getWeatherData(cityName);
		} catch (error) {
			try {
				cityName = 'Berlin';
				weatherData = await getWeatherData(cityName);
			} catch (error) {
				console.error(error.message);
			}
		}

		forecast5DaysData = weatherData.daily.slice(1, 6);
		forecastTodayData = weatherData.daily[0];
	}
</script>

<form class="mb-4" on:submit={handleSubmit}>
	<div class="mb-3">
		<input
			type="text"
			class="form-control"
			id="cityName"
			placeholder="Stadtname eingeben"
			bind:value={cityName}
		/>
	</div>
	<button type="submit" class="btn btn-primary">Wetter abrufen</button>
</form>

{#if forecastTodayData}
	<WeatherForecastToday {forecastTodayData} />
{/if}

{#if forecast5DaysData}
	<WeatherForecastList {forecast5DaysData} />
{/if}
