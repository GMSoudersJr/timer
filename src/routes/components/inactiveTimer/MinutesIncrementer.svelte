<script>
  import { recoveryMinutes, runningTimer } from '$lib/stores.js';
  import { recoveryMinutesIncrementorTitle } from '$lib/strings.js';
</script>

<button
  id="inactive-minutes-increment"
  title="Increase Recovery Minutes"
  type="button"
  class="button-incrementer"
  onclick={recoveryMinutes.increment}
  disabled={ $runningTimer }
>
  ➕
</button>

