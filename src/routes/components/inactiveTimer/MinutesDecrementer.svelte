<script>
  import { recoveryMinutes, runningTimer } from '$lib/stores.js';
  import { recoveryMinutesDecrementorTitle } from '$lib/strings.js';
</script>

<button
  id="inactive-minutes-decrementer"
  title={ recoveryMinutesDecrementorTitle }
  type="button"
  class="button-decrementer"
  on:click={ recoveryMinutes.decrement }
  disabled={ $runningTimer }
>
  ➖
</button>
