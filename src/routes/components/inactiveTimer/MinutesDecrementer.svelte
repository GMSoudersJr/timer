<script>
  import { recoveryMinutes, runningTimer } from '$lib/stores.js';
</script>

<button
  id="inactive-minutes-decrementer"
  title="Decrease Recovery Minutes"
  type="button"
  class="button-decrementer"
  on:click={ recoveryMinutes.decrement }
  disabled={ $runningTimer }
>
  ➖
</button>
