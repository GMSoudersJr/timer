<script>
  import { inactiveSeconds } from '$lib/stores.js';
</script>

<button
  id="inactive-seconds-decrement"
  title="Decrease Recovery Seconds"
  type="button"
  class="button-decrementer"
  on:click={ inactiveSeconds.decrement }
>
  -
</button>

