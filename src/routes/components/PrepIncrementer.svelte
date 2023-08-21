<script>
  import {prepTime} from '$lib/stores.js';

  function increment() {
    if ( $prepTime < 59 ) {
      prepTime.update((seconds) => seconds + 1);
    } else {
      prepTime.update((seconds) => seconds = 0)
    }
  }
</script>

<button type="button" class="" on:click={ increment }>
  +
</button>
