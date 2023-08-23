<script>
   import {
      activeSeconds,
      activeMinutes,
      inactiveSeconds,
      inactiveMinutes,
      runningTimer,
      currentIntervalId,
   } from '$lib/stores.js';
   import { minutesAndSecondsString } from '$lib/utils.js';
   import StartStop from './StartStop.svelte';
   import Timer from './Timer.svelte';

   $: timerName = "Activity";

   $: activityCountdownSeconds = Number.parseInt($activeSeconds + ($activeMinutes * 60));
   $: recoveryCountdownSeconds = Number.parseInt($inactiveSeconds + ($inactiveMinutes * 60));

   $: timerDisplay = minutesAndSecondsString(activityCountdownSeconds);

   const handleTick = () => {
      if ( $runningTimer && activityCountdownSeconds > 0 )  {
         activityCountdownSeconds--
         console.log("Activity TICK! TICK!");
      }
      //TODO clear the interval after time finishes or use separate timers.
      if ($runningTimer && activityCountdownSeconds == 0 && recoveryCountdownSeconds > 0) {
         timerName = "Recovery";
         timerDisplay = minutesAndSecondsString(recoveryCountdownSeconds);
         recoveryCountdownSeconds--
         console.log("Recovery TOCK! TOCK!");
      }
   }

</script>

<StartStop callback={handleTick}/>
<Timer
   clock={timerDisplay}
   {timerName}
/>
