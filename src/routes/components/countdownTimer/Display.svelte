<script>
   import {
      activeSeconds,
      activeMinutes,
      inactiveSeconds,
      inactiveMinutes,
      runningTimer,
      currentIntervalId,
      timerToDisplay,
   } from '$lib/stores.js';

   import {
      minutesAndSecondsString,
      calculateSeconds,
   } from '$lib/utils.js';

   import StartStopButton from './StartStopButton.svelte';
   import Timer from './Timer.svelte';
   import ActivityTimer from './ActivityTimer.svelte';
   import RecoveryTimer from './RecoveryTimer.svelte';

   $: activityCountdownSeconds = calculateSeconds($activeMinutes, $activeSeconds);
   $: recoveryCountdownSeconds = calculateSeconds($inactiveMinutes, $inactiveSeconds);

   $: activityMinutesAndSecondsString
   = minutesAndSecondsString(activityCountdownSeconds);

   $: recoveryMinutesAndSecondsString
   = minutesAndSecondsString(recoveryCountdownSeconds);

   let timeoutId;

   const handleTick = () => {
      if (activityCountdownSeconds > 0 && $runningTimer)  {
         activityCountdownSeconds--;
         console.log("Activity TICK! TICK!");
      }
      if ( activityCountdownSeconds == 0 && $timerToDisplay === 'activity' ) {
         clearInterval($currentIntervalId);
         console.log("Activity Timer finished. Cleared Interval", $currentIntervalId);
         currentIntervalId.update(id => id = 0);
         //TODO BEEP!
         timeoutId = setTimeout(() => {
            timerToDisplay.update(name => name = "recovery");
         }, 1000);
         console.log("timeoutId:", timeoutId);
      }
   }

   const recoveryTick = () => {
      if (recoveryCountdownSeconds > 0 && $runningTimer)  {
         recoveryCountdownSeconds--;
         console.log("Recovery TOCK! TOCK!");
      } else if ( recoveryCountdownSeconds == 0 && $timerToDisplay === 'recovery' ) {
         clearInterval($currentIntervalId);
         console.log("Recovery Timer finished. Cleared Interval", $currentIntervalId);
         currentIntervalId.update(id => id = 0);
         clearTimeout(timeoutId);
         timeoutId = setTimeout(() => {
            console.log("RESET IT ALL")
            resetTheDisplay();
            resetTheTimers();
            resetTheButton();
         }, 1000);
         console.log("timeoutId:", timeoutId);
         //TODO BEEP!
      }
   }

   const resetTheButton = () => {
      runningTimer.update(status => status = !status);
   }
   const resetTheDisplay = () => {
      timerToDisplay.update(display => display = null);
   }
   const resetTheTimers = () => {
      activityCountdownSeconds = calculateSeconds($activeMinutes, $activeSeconds);
      recoveryCountdownSeconds = calculateSeconds($inactiveMinutes, $inactiveSeconds);
   }
</script>

<StartStopButton
   activityCallback={handleTick}
   recoveryCallback={recoveryTick}
/>
{#if $timerToDisplay == "activity"}
   <ActivityTimer
      callback={handleTick}
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
