<script>
    export let Forecast5DaysData;
    import {calcDate} from "../utils/dateUtils.js";
</script>

<div class="container">
    <div class="row">
        <h3 class="mb-4 mt-4"> 5 Tage Vorhersage</h3>
        {#each Forecast5DaysData as day}
            <div class="col">
                <div class="card shadow-0 border">
                    <div class="card-body p-4">
                        <h4 class="mb-1 sfw-normal">{calcDate(day.dt)}</h4>
                        <p>{day.weather[0].description}</p>
                        <p class="mb-0">Min: <strong>{day.temp.min}°C</strong></p>
                        <p>Max: <strong>{day.temp.max}°C</strong></p>
                        <img src="http://openweathermap.org/img/wn/{day.weather[0].icon}@2x.png">
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
