<script>
  import { onDestroy } from 'svelte';
  import {
    runningTimer,
    currentIntervalId,
    timerToDisplay
  } from '$lib/stores.js';

  export let activityCallback;
  export let recoveryCallback

  const startInterval = () => {
    let intervalId;
    if ( $timerToDisplay === "activity" ) {
      intervalId = setInterval(activityCallback, 1000);
    } else if ( $timerToDisplay === "recovery" ) {
      intervalId = setInterval(recoveryCallback, 1000);
    } else {
      intervalId = 0;
    }
    currentIntervalId.update(id => id = intervalId);
    console.log("Continuing the countdown")
    console.log("Starting new interval:", $currentIntervalId);
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
