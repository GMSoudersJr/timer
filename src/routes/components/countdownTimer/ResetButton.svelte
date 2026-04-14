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
  title="Reset the timers"
  aria-label="Reset the timers"
  type="button"
  class="button-timer"
  style="background: none; color: var(--colorNavy); border: 2px solid var(--colorNavy);"
  onclick={handleClick}
>
  ↺ Reset
</button>

<style>
</style>
