<script>
  import { recoveryMinutes, runningTimer } from '$lib/stores.js';
</script>

<button
  id="inactive-minutes-increment"
  title="Increase Recovery Minutes"
  type="button"
  class="button-incrementer"
  on:click={ recoveryMinutes.increment }
  disabled={ $runningTimer }
>
  ➕
</button>

