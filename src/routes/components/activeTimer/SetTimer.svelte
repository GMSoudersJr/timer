<script>
  import { activityTimerString } from '$lib/strings.js';
  import { activityMinutes, activitySeconds } from '$lib/stores.js';
  import TimeSpinner from '../TimeSpinner.svelte';
</script>

<div id="timer-display" class="set-timer-display">
  <h2 class="timer-text">{activityTimerString}</h2>
  <div id="activity-timer" class="set-minutes-and-seconds-container">
    <TimeSpinner
      value={$activityMinutes}
      unit="m"
      label="Activity minutes"
      onincrement={() => activityMinutes.increment()}
      ondecrement={() => activityMinutes.decrement()}
      oninput={(e) => activityMinutes.setValue(e.target.value)}
    />
    <span class="time-colon" aria-hidden="true">:</span>
    <TimeSpinner
      value={$activitySeconds}
      unit="s"
      label="Activity seconds"
      onincrement={() => activitySeconds.increment()}
      ondecrement={() => activitySeconds.decrement()}
      oninput={(e) => activitySeconds.setValue(e.target.value)}
    />
  </div>
</div>
