<script>
  import { recoverySeconds } from '$lib/stores.js';
</script>

<h1
  id="recovery-seconds"
  title="Recovery Seconds"
  class="timer-digits"
>
  {$recoverySeconds < 10 ? `0${$recoverySeconds}` : $recoverySeconds}
</h1>
