<script>
  import { inactiveSeconds } from '$lib/stores.js';
</script>

<button type="button" class="" on:click={ inactiveSeconds.decrement }>
  -
</button>

