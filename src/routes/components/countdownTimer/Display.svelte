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
      }
      if (activityCountdownSeconds == 0 && recoveryCountdownSeconds > 0) {
         timerToDisplay.update(name => name = "recovery");
         recoveryCountdownSeconds--;
         console.log("Recovery TOCK! TOCK!");
      }
      if ( activityCountdownSeconds == 0 && recoveryCountdownSeconds == 0 &&
         $runningTimer ) {
         console.log("Recovery finished");
         clearInterval($currentIntervalId);
         currentIntervalId.update(id => id = 0);
         runningTimer.update(status => status = !status);
         timerToDisplay.update(display => display = null);
         activityCountdownSeconds = Number.parseInt($activeSeconds + ($activeMinutes * 60));
         recoveryCountdownSeconds = Number.parseInt($inactiveSeconds + ($inactiveMinutes * 60));
         //TODO BEEP!
      }
   }
</script>

<StartStopButton callback={handleTick}/>
{#if $timerToDisplay == "activity"}
   <ActivityTimer callback={handleTick} clock={activityMinutesAndSecondsString} />
{:else if $timerToDisplay == "recovery"}
   <RecoveryTimer callback={handleTick} clock={recoveryMinutesAndSecondsString} />
{:else}
   <Timer timerName="HaHa" clock="80:08" />
{/if}
