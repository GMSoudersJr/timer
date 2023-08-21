<script>
  import { prepTime } from '$lib/stores.js';

  function decrement() {
    if ( $prepTime > 0 ) {
      prepTime.update((seconds) => seconds - 1);
    } else {
      prepTime.update((seconds) => seconds = 59);
    }
  }
</script>

<button type="button" class="" on:click={ decrement }>
  -
</button>

