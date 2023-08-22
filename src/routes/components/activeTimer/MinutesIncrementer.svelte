<script>
  import { activeMinutes } from '$lib/stores.js';
</script>

<button
  id="active-minutes-incrementer"
  title="Increase Activity Minutes"
  type="button"
  class="button-incrementer"
  on:click={ activeMinutes.increment }
>
  ➕
</button>

