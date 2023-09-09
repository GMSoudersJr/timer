<script>
  import { recoveryMinutes } from '$lib/stores.js';
  import { recoveryMinutesTitle } from '$lib/strings.js';
</script>


<h1
  id="recovery-minutes"
  title={ recoveryMinutesTitle }
  class="timer-digits"
>
  {$recoveryMinutes < 10 ? `0${$recoveryMinutes}` : $recoveryMinutes} m
</h1>
