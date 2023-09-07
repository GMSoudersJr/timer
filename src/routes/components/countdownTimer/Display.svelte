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
   import Timer from './Timer.svelte';
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
   console.log("Sound the Alarm", soundTheAlarm);
   let timeoutId;



   const activityTick = () => {
      if (activityCountdownSeconds > 0 && $runningTimer)  {
         activityCountdownSeconds--;
         console.log("Activity TICK! TICK!");
      }
      if ( activityCountdownSeconds == 0 && $timerToDisplay === 'activity' ) {
         soundTheAlarm = true;
         clearInterval($currentIntervalId);
         console.log("Activity Timer finished. Cleared Interval", $currentIntervalId);
         currentIntervalId.update(id => id = 0);
         //TODO BEEP!
         timeoutId = setTimeout(() => {
            timerToDisplay.update(name => name = "recovery");
            soundTheAlarm = false;
         }, 1500);
         currentTimeoutId.set(timeoutId);
         console.log("timeoutId:", timeoutId);
      }
   }

   const recoveryTick = () => {
      if (recoveryCountdownSeconds > 0 && $runningTimer)  {
         recoveryCountdownSeconds--;
         console.log("Recovery TOCK! TOCK!");
      } else if ( recoveryCountdownSeconds == 0 && $timerToDisplay === 'recovery' ) {
         soundTheAlarm = true;
         //TODO BEEP!
         clearInterval($currentIntervalId);
         console.log("Recovery Timer finished. Cleared Interval", $currentIntervalId);
         currentIntervalId.update(id => id = 0);
         clearTimeout($currentTimeoutId);
         currentTimeoutId.set(null);
         console.log("Sound the Alarm", soundTheAlarm);
         timeoutId = setTimeout(() => {
            console.log("RESET IT ALL")
            resetTheDisplay();
            resetTheTimers();
            resetTheButton();
            soundTheAlarm = false;
         }, 1500);
         currentTimeoutId.set(timeoutId);
         console.log("timeoutId:", timeoutId);
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
      <Timer timerName="HaHa" clock="80:08" />
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

</style>
