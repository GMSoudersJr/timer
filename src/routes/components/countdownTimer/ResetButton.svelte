<script>
  import {
    runningTimer,
    timerToDisplay,
    activitySeconds,
    activityMinutes,
    recoverySeconds,
    recoveryMinutes,
    currentIntervalId,
    currentTimeoutId,
  } from '$lib/stores.js';

  function handleClick() {
    activitySeconds.reset();
    activityMinutes.reset();
    recoverySeconds.reset();
    recoveryMinutes.reset();
    timerToDisplay.set(null);
    runningTimer.set(false);
    clearTimeout($currentTimeoutId);
    currentTimeoutId.set(null);
    clearInterval($currentIntervalId);
    currentIntervalId.set(null);
  }
</script>

<button
  id="reset-button"
  title="Reset the Timers"
  type="button"
  class="button-timer"
  on:click={ handleClick }
>
  🔄
</button>

<style>
</style>
