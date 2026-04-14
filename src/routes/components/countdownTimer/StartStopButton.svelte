<script>
  import {
    runningTimer,
    currentIntervalId,
    timerToDisplay,
    activitySeconds,
    activityMinutes,
    recoverySeconds,
    recoveryMinutes,
  } from '$lib/stores.js';

  let { activityCallback, recoveryCallback } = $props();

  $effect(() => {
    return () => {
      clearInterval($currentIntervalId);
      currentIntervalId.set(0);
    };
  });

  const startInterval = () => {
    let intervalId;
    if ($timerToDisplay === "activity") {
      intervalId = setInterval(activityCallback, 1000);
    } else if ($timerToDisplay === "recovery") {
      intervalId = setInterval(recoveryCallback, 1000);
    } else {
      intervalId = 0;
    }
    currentIntervalId.set(intervalId);
  };

  let disableStart = $derived($activitySeconds + $activityMinutes + $recoverySeconds + $recoveryMinutes == 0);

  function handleClick() {
    runningTimer.update(status => !status);

    if ($runningTimer && !$timerToDisplay) {
      timerToDisplay.set("activity");
    } else if ($runningTimer && $timerToDisplay) {
      startInterval();
    } else if (!$runningTimer && $timerToDisplay) {
      clearInterval($currentIntervalId);
      currentIntervalId.set(0);
    }
  }
</script>

<button
  id="button-timer-start-stop"
  title={$runningTimer ? 'Pause timer' : 'Start timer'}
  aria-label={$runningTimer ? 'Pause timer' : 'Start timer'}
  aria-pressed={$runningTimer}
  type="button"
  class="button-timer"
  style={$runningTimer
    ? "background: var(--colorRed); color: #fff;"
    : "background: var(--colorGreen); color: #fff;"}
  onclick={handleClick}
  disabled={disableStart}
>
  {$runningTimer ? "⏸ Pause" : "▶ Start"}
</button>

<style>
</style>
