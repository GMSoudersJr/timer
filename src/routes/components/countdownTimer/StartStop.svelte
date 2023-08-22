<script>
  import { runningTimer } from '$lib/stores.js';
  import { onInterval } from '$lib/utils.js';

  export let callback;

  let nIntervalId;

  const startInterval = () => {
    nIntervalId = setInterval(callback, 1000);
    console.log("set interval", nIntervalId);
  };

  function handleClick() {
    runningTimer.update(status => status = !status);
    console.log("runningTimer", $runningTimer);
    if ( $runningTimer) {
      startInterval();
    } else if (nIntervalId && !$runningTimer) {
      clearInterval(nIntervalId);
      console.log("cleared interval", nIntervalId);
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
