<script>
   import {
      activeSeconds,
      activeMinutes,
      activeTimeInSeconds,
      inactiveSeconds,
      inactiveMinutes,
      inactiveTimeInSeconds,
      runningTimer
   } from '$lib/stores.js';
   import { minutesAndSecondsString } from '$lib/utils.js';
   import StartStop from './StartStop.svelte';
   import Timer from './Timer.svelte';

   $: whichTimer = "Activity";

   $: activityCountdownSeconds = Number.parseInt($activeSeconds + ($activeMinutes * 60));
   $: recoveryCountdownSeconds = Number.parseInt($inactiveSeconds + ($inactiveMinutes * 60));

   activeTimeInSeconds.update(seconds => {
      seconds = Number.parseInt($activeSeconds) + (Number.parseInt($activeMinutes) * 60);
      return seconds
   });

   inactiveTimeInSeconds.set($inactiveSeconds + ($inactiveMinutes * 60));

   $: timerDisplay = minutesAndSecondsString(activityCountdownSeconds);

   const handleTick = () => {
      if ($runningTimer && activityCountdownSeconds == 0 &&
         recoveryCountdownSeconds >= 0) {
         timerDisplay = minutesAndSecondsString(recoveryCountdownSeconds);
         whichTimer = "Recovery";
         console.log("Recovery TOCK! TOCK!");
         recoveryCountdownSeconds--
      }
      if ( $runningTimer && activityCountdownSeconds > 0 )  {
         activityCountdownSeconds--
         console.log("Activity TICK! TICK!");
      }
   }

</script>

<StartStop callback={handleTick}/>
<Timer
   clock={timerDisplay}
   {whichTimer}
/>
<h1>Active { minutesAndSecondsString($activeSeconds + ($activeMinutes * 60)) }</h1>
<h1>Inactive { minutesAndSecondsString($inactiveSeconds + ($inactiveMinutes * 60)) }</h1>
