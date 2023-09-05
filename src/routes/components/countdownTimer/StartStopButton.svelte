<script>
  import {
    runningTimer,
    currentIntervalId,
    timerToDisplay
  } from '$lib/stores.js';
  import { startAnInterval } from '$lib/utils.js';

  export let callback;

  const startInterval = () => {
    let intervalId = setInterval(callback, 1000);
    currentIntervalId.update(id => id = intervalId);
    console.log("set interval", $currentIntervalId);
  };

  function handleClick() {
    runningTimer.update(status => status = !status);
    console.log("currentIntervalId:", $currentIntervalId);
    console.log("runningTimer", $runningTimer);
    console.log("timerToDisplay:", $timerToDisplay);

    if ( $runningTimer && !$timerToDisplay ) {
      timerToDisplay.update(timer => timer = "activity");
      startInterval();
    } else if ( $runningTimer && $timerToDisplay ) {
      console.log("what's going on?")
      startInterval();
    } else if ( !$runningTimer && $timerToDisplay ) {
      clearInterval($currentIntervalId);
      console.log("cleared interval:", $currentIntervalId);
      currentIntervalId.update(id => id = 0);
      console.log("currentIntervalId:", $currentIntervalId);
    }
  }

  function handleClickOld() {
    runningTimer.update(status => status = !status);
    if ( !$timerToDisplay ) {
      timerToDisplay.update(timer => timer = "activity");
    }
    console.log("runningTimer", $runningTimer);
    if ( $runningTimer) {
      startAnInterval(callback);
    } else if (currentIntervalId && !$runningTimer) {
      clearInterval($currentIntervalId);
      console.log("cleared interval", $currentIntervalId);
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
