<script>
  import { recoverySeconds } from '$lib/stores.js';
</script>

<button
  id="inactive-seconds-decrement"
  title="Decrease Recovery Seconds"
  type="button"
  class="button-decrementer"
  on:click={ recoverySeconds.decrement }
>
  ➖
</button>

