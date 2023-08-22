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

   function createMinuteAndSecondDisplay(timeInSeconds) {
      let timerMinutes = Math.floor(timeInSeconds / 60); 
      let timerSeconds = Math.floor(timeInSeconds % 60);
      if ( timerMinutes < 10 ) timerMinutes = `0${timerMinutes}`;
      if ( timerSeconds < 10 ) timerSeconds = `0${timerSeconds}`;

      return `${timerMinutes}:${timerSeconds}`;
   }
   let seconds = inactiveTimeInSeconds.set($inactiveSeconds + ($inactiveMinutes * 60));
   console.log(seconds);
   const handleTick = () => {
      seconds -= 1;
   }
</script>

<h1>{ createMinuteAndSecondDisplay(seconds) }</h1>
