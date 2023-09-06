<script>
  import { recoveryMinutes } from '$lib/stores.js';
</script>


<h1
  id="recovery-minutes"
  title="Recovery Minutes"
  class="timer-digits"
>
  {$recoveryMinutes < 10 ? `0${$recoveryMinutes}` : $recoveryMinutes}
</h1>
