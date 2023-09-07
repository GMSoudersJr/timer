<script>
  import { recoverySeconds, runningTimer } from '$lib/stores.js';
</script>

<button
  id="inactive-seconds-increment"
  title="Increase Recovery Seconds"
  type="button"
  class="button-incrementer"
  on:click={ recoverySeconds.increment }
  disabled={ $runningTimer }
>
  ➕
</button>
