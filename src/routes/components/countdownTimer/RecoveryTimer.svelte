<script>
  import { recoveryTimerTitleString } from '$lib/strings.js';
  import { onInterval } from '$lib/utils.js';
  import { currentIntervalId } from '$lib/stores.js';
  let { clock, callback } = $props();

  if ( !$currentIntervalId ) {
    onInterval(callback, 1000);
  }
</script>

<svelte:head>
   <title>
       🧘 {clock}
   </title>
</svelte:head>

<div class="container">
  <h2 class="timer-text">
    {recoveryTimerTitleString}
  </h2>
  <h1 class="timer">
    {clock}
  </h1>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
</style>


