<script>
  import {
    runningTimer,
    timerToDisplay,
    activitySeconds,
    activityMinutes,
    recoverySeconds,
    recoveryMinutes,
  } from '$lib/stores.js';

  function handleClick() {
    activitySeconds.reset();
    activityMinutes.reset();
    recoverySeconds.reset();
    recoveryMinutes.reset();
    timerToDisplay.set(null);
    runningTimer.set(false);
  }
</script>

<button
  id="reset-button"
  title="Reset the Timers"
  type="button"
  class="button-timer"
  on:click={ handleClick }
>
  RESET
</button>

<style>
</style>
