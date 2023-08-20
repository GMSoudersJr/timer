<script>
  import { prepTime } from '$lib/stores.js';

  function decrement() {
    prepTime.update((seconds) => seconds - 1);
  }
</script>

<button type="button" class="" on:click={ decrement }>
  -
</button>

