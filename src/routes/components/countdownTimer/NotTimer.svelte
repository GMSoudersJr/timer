<script>
  import { directionsHeaderString, directionsSubheaderString } from '$lib/strings.js';
</script>

<div class="container">
  <h2 class="directions">
    {directionsHeaderString}
  </h2>
  <p class="timer-digits timer">
    {directionsSubheaderString}
  </p>
</div>

<style>
  .container {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
