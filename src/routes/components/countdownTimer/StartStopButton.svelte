<script>
  import { onDestroy } from 'svelte';
  import {
    runningTimer,
    currentIntervalId,
    timerToDisplay
  } from '$lib/stores.js';

  export let callback;

  const startInterval = () => {
    let intervalId = setInterval(callback, 1000);
    currentIntervalId.update(id => id = intervalId);
    console.log("set interval", $currentIntervalId);
  };

  onDestroy(() => {
    clearInterval($currentIntervalId);
    currentIntervalId.update(id => id = 0);
  });

  function handleClick() {
    runningTimer.update(status => status = !status);
    console.log("currentIntervalId:", $currentIntervalId);
    console.log("runningTimer", $runningTimer);
    console.log("timerToDisplay:", $timerToDisplay);

    if ( $runningTimer && !$timerToDisplay ) {
      timerToDisplay.update(name => name = "activity");
    } else if ( $runningTimer && $timerToDisplay ) {
      console.log("Continuing the countdown")
      startInterval();
    } else if ( !$runningTimer && $timerToDisplay ) {
      clearInterval($currentIntervalId);
      console.log("cleared interval:", $currentIntervalId);
      currentIntervalId.update(id => id = 0);
      console.log("currentIntervalId:", $currentIntervalId);
    }
  }
</script>

<button
  id="button-timer-start-stop"
  title="Start and Stop the Timer"
  type="button"
  class="button-timer-start-stop"
  on:click={ handleClick }
>
  {$runningTimer ? "STOP" : "START"}
</button>
