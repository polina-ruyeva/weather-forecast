<script>
    export let ForecastTodayData;
    export let cityName;
</script>

<h3 class="card-title">Wetterbericht für {cityName} heute</h3>

{#if ForecastTodayData}
    <div class="card border-0">
        <div class="card-body">
            <div class="row">
                <div class="col-lg-auto col-md-auto">
                    <p>{ForecastTodayData.weather[0].description}</p>

                    <p class="mb-0">Min: <strong>{ForecastTodayData.temp.min}°C</strong></p>
                    <p>Max: <strong>{ForecastTodayData.temp.max}°C</strong></p>
                    <p class="mb-0"> <i class="bi bi-sunrise"></i> <strong> {ForecastTodayData.temp.morn} °C </strong> </p>
                    <p class="mb-0"> <i class="bi bi-brightness-high"></i> <strong> {ForecastTodayData.temp.day} °C </strong> </p>
                    <p class="mb-0"> <i class="bi bi-brightness-alt-low"></i> <strong> {ForecastTodayData.temp.eve} °C </strong></p>
                </div>
                <div class="col-lg-auto col-md-auto">
                    <img src="http://openweathermap.org/img/wn/{ForecastTodayData.weather[0].icon}@2x.png">
                </div>
            </div>
        </div>
    </div>
{/if}