<script>
  import { inactiveMinutes } from '$lib/stores.js';
</script>

<button
  id="inactive-minutes-decrementer"
  title="Decrease Recovery Minutes"
  type="button"
  class="button-decrementer"
  on:click={ inactiveMinutes.decrement }
>
  ➖
</button>
