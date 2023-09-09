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

   $: activityCountdownSeconds = calculateSeconds($activityMinutes, $activitySeconds);
   $: recoveryCountdownSeconds = calculateSeconds($recoveryMinutes, $recoverySeconds);

   $: activityMinutesAndSecondsString
   = minutesAndSecondsString(activityCountdownSeconds);

   $: recoveryMinutesAndSecondsString
   = minutesAndSecondsString(recoveryCountdownSeconds);

   let soundTheAlarm;
   let timeoutId;



   const activityTick = () => {
      if (activityCountdownSeconds > 0 && $runningTimer)  {
         activityCountdownSeconds--;
      }
      if ( activityCountdownSeconds == 0 && $timerToDisplay === 'activity' ) {
         soundTheAlarm = true;
         clearInterval($currentIntervalId);
         currentIntervalId.update(id => id = 0);
         //TODO BEEP!
         currentTimeoutId.set(setTimeout(() => {
            timerToDisplay.update(name => name = "recovery");
            clearInterval($currentIntervalId);
            currentIntervalId.set(null);
            soundTheAlarm = false;
         }, 1500))
      }
   }

   const recoveryTick = () => {
      if (recoveryCountdownSeconds > 0 && $runningTimer)  {
         recoveryCountdownSeconds--;
      } else if ( recoveryCountdownSeconds == 0 && $timerToDisplay === 'recovery' ) {
         soundTheAlarm = true;
         //TODO BEEP!
         clearInterval($currentIntervalId);
         currentIntervalId.update(id => id = 0);
         clearTimeout($currentTimeoutId);
         currentTimeoutId.set(null);
         currentTimeoutId.set(setTimeout(() => {
            resetTheDisplay();
            resetTheTimers();
            resetTheButton();
            soundTheAlarm = false;
         }, 1500));
      }
   }

   const resetTheButton = () => {
      runningTimer.update(status => status = !status);
   }
   const resetTheDisplay = () => {
      timerToDisplay.update(display => display = null);
   }
   const resetTheTimers = () => {
      activityCountdownSeconds = calculateSeconds($activityMinutes, $activitySeconds);
      recoveryCountdownSeconds = calculateSeconds($recoveryMinutes, $recoverySeconds);
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
   }
   .button-container {
      display: flex;
      gap: 1em;
   }

</style>
