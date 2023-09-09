<script>
  import { recoverySeconds } from '$lib/stores.js';
  import { recoverySecondsTitle } from '$lib/strings.js';
</script>

<h1
  id="recovery-seconds"
  title={ recoverySecondsTitle }
  class="timer-digits"
>
  {$recoverySeconds < 10 ? `0${$recoverySeconds}` : $recoverySeconds} s
</h1>
