<script>
   import {
      activitySeconds,
      activityMinutes,
      recoverySeconds,
      recoveryMinutes,
      runningTimer,
      currentIntervalId,
      currentTimeoutId,
      timerToDisplay,
   } from '$lib/stores.js';

   import {
      minutesAndSecondsString,
      calculateSeconds,
   } from '$lib/utils.js';

   import StartStopButton from './StartStopButton.svelte';
   import ResetButton from './ResetButton.svelte';
   import NotTimer from './NotTimer.svelte';
   import ActivityTimer from './ActivityTimer.svelte';
   import RecoveryTimer from './RecoveryTimer.svelte';
   import Alarm from './Alarm.svelte';

   let activityCountdownSeconds = $state(0);
   let recoveryCountdownSeconds = $state(0);

   // Sync countdown values from stores whenever the timer is not actively running
   $effect(() => {
      if (!$timerToDisplay) {
         activityCountdownSeconds = calculateSeconds($activityMinutes, $activitySeconds);
         recoveryCountdownSeconds = calculateSeconds($recoveryMinutes, $recoverySeconds);
      }
   });

   let activityMinutesAndSecondsString = $derived(minutesAndSecondsString(activityCountdownSeconds));
   let recoveryMinutesAndSecondsString = $derived(minutesAndSecondsString(recoveryCountdownSeconds));

   let soundTheAlarm = $state(false);

   const activityTick = () => {
      if (activityCountdownSeconds > 0 && $runningTimer) {
         activityCountdownSeconds--;
      }
      if (activityCountdownSeconds == 0 && $timerToDisplay === 'activity') {
         soundTheAlarm = true;
         clearInterval($currentIntervalId);
         currentIntervalId.set(0);
         currentTimeoutId.set(setTimeout(() => {
            timerToDisplay.set("recovery");
            clearInterval($currentIntervalId);
            currentIntervalId.set(null);
            soundTheAlarm = false;
         }, 1500));
      }
   }

   const recoveryTick = () => {
      if (recoveryCountdownSeconds > 0 && $runningTimer) {
         recoveryCountdownSeconds--;
      } else if (recoveryCountdownSeconds == 0 && $timerToDisplay === 'recovery') {
         soundTheAlarm = true;
         clearInterval($currentIntervalId);
         currentIntervalId.set(0);
         clearTimeout($currentTimeoutId);
         currentTimeoutId.set(null);
         currentTimeoutId.set(setTimeout(() => {
            timerToDisplay.set(null); // triggers $effect to reset countdown values
            runningTimer.set(false);
            soundTheAlarm = false;
         }, 1500));
      }
   }
</script>

<div class="container">
   <div class="timer-display-container">
   {#if $timerToDisplay == "activity"}
      <ActivityTimer
         callback={activityTick}
         clock={activityMinutesAndSecondsString}
      />
   {:else if $timerToDisplay == "recovery"}
      <RecoveryTimer
         callback={recoveryTick}
         clock={recoveryMinutesAndSecondsString}
      />
   {:else}
      <NotTimer />
   {/if}
   </div>
   <div class="button-container">
      <StartStopButton
         activityCallback={activityTick}
         recoveryCallback={recoveryTick}
      />
      <ResetButton />
   </div>
   {#if soundTheAlarm == true}
      <Alarm />
   {/if}
</div>

<style>
   .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
   }
   .timer-display-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .button-container {
      display: flex;
      gap: 1em;
   }

</style>
