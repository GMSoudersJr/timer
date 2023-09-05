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
   import { minutesAndSecondsString, startAnInterval } from '$lib/utils.js';
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
   = minutesAndSecondsString(recoveryCountdownSeconds);

   const handleTick = () => {
      console.log("$currentIntervalId", $currentIntervalId);
      if (activityCountdownSeconds > 0 && $runningTimer)  {
         activityCountdownSeconds--;
         console.log("Activity TICK! TICK!");
      }
      if ( activityCountdownSeconds == 0 && $timerToDisplay === 'activity' ) {
         clearInterval($currentIntervalId);
         console.log("Activity Timer finished. Cleared Interval", $currentIntervalId);
         currentIntervalId.update(id => id = 0);

         //TODO BEEP!
      }
      if (activityCountdownSeconds == 0 && recoveryCountdownSeconds > 0) {
         timerToDisplay.update(value => value = "recovery");
         recoveryCountdownSeconds--;
         console.log("Recovery TOCK! TOCK!");
      }
      if ( activityCountdownSeconds == 0 && recoveryCountdownSeconds == 0 &&
         $runningTimer ) {
         console.log("Recovery finished");
         clearInterval($currentIntervalId);
         runningTimer.update(status => status = !status);
         timerToDisplay.update(display => display = "DONE");

      }
   }
   /*
   <ActivityTimer callback={handleTick} clock={activityMinutesAndSecondsString} />
    */
</script>

<StartStopButton callback={handleTick}/>
{#if $timerToDisplay == "activity"}
   <ActivityTimer callback={handleTick} clock={activityMinutesAndSecondsString} />
{:else if $timerToDisplay == "recovery"}
   <RecoveryTimer callback={handleTick} clock={recoveryMinutesAndSecondsString} />
{:else}
   <Timer timerName="HaHa" clock="80:08" />
{/if}
