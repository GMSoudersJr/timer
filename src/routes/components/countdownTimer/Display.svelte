<script>
   import {
      activeSeconds,
      activeMinutes,
      activeTimeInSeconds,
      inactiveSeconds,
      inactiveMinutes,
      inactiveTimeInSeconds
   } from '$lib/stores.js';

   activeTimeInSeconds.set($activeSeconds + ($activeMinutes * 60));
   $: seconds = inactiveTimeInSeconds.set($inactiveSeconds + ($inactiveMinutes * 60));

   function createMinuteAndSecondDisplay(timeInSeconds) {
      let timerMinutes = Math.floor(timeInSeconds / 60); 
      let timerSeconds = Math.floor(timeInSeconds % 60);
      if ( timerMinutes < 10 ) timerMinutes = `0${timerMinutes}`;
      if ( timerSeconds < 10 ) timerSeconds = `0${timerSeconds}`;

      return `${timerMinutes}:${timerSeconds}`;
   }
   const handleTick = () => {
      seconds -= 1;
   }
</script>
