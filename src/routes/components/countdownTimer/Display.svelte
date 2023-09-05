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
   import { minutesAndSecondsString } from '$lib/utils.js';
   import StartStopButton from './StartStopButton.svelte';
   import Timer from './Timer.svelte';
   import ActivityTimer from './ActivityTimer.svelte';
   import RecoveryTimer from './RecoveryTimer.svelte';

   $: activityCountdownSeconds = Number.parseInt($activeSeconds + ($activeMinutes * 60));
   $: recoveryCountdownSeconds = Number.parseInt($inactiveSeconds + ($inactiveMinutes * 60));

   $: timerDisplay = minutesAndSecondsString(activityCountdownSeconds);

   $: activityMinutesAndSecondsString
   = minutesAndSecondsString(activityCountdownSeconds);

   $: recoveryMinutesAndSecondsString
   = minutesAndSecondsString(activityCountdownSeconds);

   const handleTick = () => {
      if (activityCountdownSeconds > 0 && $runningTimer)  {
         activityCountdownSeconds--
         console.log("Activity TICK! TICK!");
      }
      if ( activityCountdownSeconds == 0 && timerToDisplay === 'activity' ) {
         clearInterval($currentIntervalId);
         //TODO BEEP!
         console.log("Activity Timer finished. Cleared Interval", $currentIntervalId);
         timerToDisplay.update(value => value = "recovery");
      }
      //TODO clear the interval after time finishes or use separate timers.
      // Try putting startInterval in utils.js instead of using typing it
      // again.
      if (activityCountdownSeconds == 0 && recoveryCountdownSeconds > 0) {
         clearInterval(currentIntervalId)
         recoveryCountdownSeconds--
         console.log("Recovery TOCK! TOCK!");
      }
   }
   /*
   <ActivityTimer callback={handleTick} clock={activityMinutesAndSecondsString} />
    */
</script>

<StartStopButton callback={handleTick}/>
{#if $timerToDisplay == "activity"}
   <ActivityTimer clock={activityMinutesAndSecondsString} />
{:else if $timerToDisplay == "recovery"}
   <RecoveryTimer clock={recoveryMinutesAndSecondsString} />
{:else}
   <Timer timerName="HaHa" clock="80:08" />
{/if}
