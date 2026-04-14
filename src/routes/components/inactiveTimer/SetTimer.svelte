<script>
  import { recoveryTimerString } from '$lib/strings.js';
  import { recoveryMinutes, recoverySeconds } from '$lib/stores.js';
  import TimeSpinner from '../TimeSpinner.svelte';
</script>

<div id="timer-display" class="set-timer-display">
  <h2 class="timer-text">{recoveryTimerString}</h2>
  <div id="recovery-timer" class="set-minutes-and-seconds-container">
    <TimeSpinner
      value={$recoveryMinutes}
      unit="m"
      label="Recovery minutes"
      onincrement={() => recoveryMinutes.increment()}
      ondecrement={() => recoveryMinutes.decrement()}
      oninput={(e) => recoveryMinutes.setValue(e.target.value)}
    />
    <span class="time-colon" aria-hidden="true">:</span>
    <TimeSpinner
      value={$recoverySeconds}
      unit="s"
      label="Recovery seconds"
      onincrement={() => recoverySeconds.increment()}
      ondecrement={() => recoverySeconds.decrement()}
      oninput={(e) => recoverySeconds.setValue(e.target.value)}
    />
  </div>
</div>
