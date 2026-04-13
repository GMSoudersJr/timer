<script>
  import { recoverySeconds, runningTimer } from '$lib/stores.js';
  import { recoverySecondsIncrementorTitle } from '$lib/strings.js';
</script>

<button
  id="inactive-seconds-increment"
  title={ recoverySecondsIncrementorTitle }
  type="button"
  class="button-incrementer"
  onclick={recoverySeconds.increment}
  disabled={ $runningTimer }
>
  ➕
</button>
