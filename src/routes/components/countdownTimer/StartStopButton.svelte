<script>
  import { onDestroy } from 'svelte';
  import {
    runningTimer,
    currentIntervalId,
    timerToDisplay,
    activitySeconds,
    activityMinutes,
    recoverySeconds,
    recoveryMinutes,
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
  };

  onDestroy(() => {
    clearInterval($currentIntervalId);
    currentIntervalId.update(id => id = 0);
  });

  $: disableStart = $activitySeconds + $activityMinutes + $recoverySeconds + $recoveryMinutes == 0;

  function handleClick() {
    runningTimer.update(status => status = !status);

    if ( $runningTimer && !$timerToDisplay ) {
      timerToDisplay.update(name => name = "activity");
    } else if ( $runningTimer && $timerToDisplay ) {
      startInterval();
    } else if ( !$runningTimer && $timerToDisplay ) {
      clearInterval($currentIntervalId);
      currentIntervalId.update(id => id = 0);
    }
  }
</script>

<button
  id="button-timer-start-stop"
  title="Start and Stop the Timer"
  type="button"
  class="button-timer"
  style={$runningTimer ? "color: var(--colorRed)" : "color: var(--colorGreen)"}
  on:click={ handleClick }
  disabled={ disableStart }
>
  {$runningTimer ? "⏸" : "▶"}
</button>

<style>
</style>
