<script>
	export let forecastTodayData;

	import { calcDate } from '../utils/dateUtils.js';
</script>

<h3 class="card-title">Wetterbericht für heute</h3>
<div class="card border-0">
	<div class="card-body">
		<div class="row">
			<div class="col-lg-auto col-md-auto">
				<p class="mb-0"><i class="bi bi-calendar-event" /> {calcDate(forecastTodayData.dt)}</p>
				<p>{forecastTodayData.weather[0].description}</p>
				<p class="mb-0">Min: <strong>{forecastTodayData.temp.min}°C</strong></p>
				<p>Max: <strong>{forecastTodayData.temp.max}°C</strong></p>
				<p class="mb-0">
					<i class="bi bi-sunrise" /> <strong> {forecastTodayData.temp.morn} °C </strong>
				</p>
				<p class="mb-0">
					<i class="bi bi-brightness-high" /> <strong> {forecastTodayData.temp.day} °C </strong>
				</p>
				<p class="mb-0">
					<i class="bi bi-brightness-alt-low" /> <strong> {forecastTodayData.temp.eve} °C </strong>
				</p>
			</div>
			<div class="col-lg-auto col-md-auto">
				<img src="http://openweathermap.org/img/wn/{forecastTodayData.weather[0].icon}@2x.png" />
			</div>
		</div>
	</div>
</div>
