<script>
  import {
    runningTimer,
    currentIntervalId,
    timerToDisplay
  } from '$lib/stores.js';

  export let callback;

  const startInterval = () => {
    currentIntervalId.update(interval => interval = setInterval(callback, 1000)) ;
    console.log("set interval", $currentIntervalId);
  };

  function handleClick() {
    runningTimer.update(status => status = !status);
    if ( !$timerToDisplay ) {
      timerToDisplay.update(timer => timer = "activity");
    }
    console.log("runningTimer", $runningTimer);
    if ( $runningTimer) {
      startInterval();
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
