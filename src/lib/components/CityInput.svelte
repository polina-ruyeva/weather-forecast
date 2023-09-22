<script>
    let cityName = '';

    function handleSubmit(event) {
        event.preventDefault();
    }
</script>

<form class="mb-4" on:submit={handleSubmit}>
    <div class="mb-3">
        <label for="cityName" class="form-label">Stadtname</label>
        <input type="text" class="form-control" id="cityName" placeholder="Stadtname eingeben" bind:value={cityName}>
    </div>
    <button type="submit" class="btn btn-primary">Wetter abrufen</button>
</form>
