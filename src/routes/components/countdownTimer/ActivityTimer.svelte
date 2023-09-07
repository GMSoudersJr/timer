<script>
  import { onInterval } from '$lib/utils.js';
  import { currentIntervalId } from '$lib/stores.js';
  export let clock;
  export let callback;

  if ( !$currentIntervalId ) {
    onInterval(callback, 1000);
  }
</script>

<div class="container">
  <h2 class="timer-text">
    Activity
  </h2>
  <h1 class="timer">
    {clock}
  </h1>
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

