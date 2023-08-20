<script>
  import {prepTime} from '$lib/stores.js';

  function increment() {
    prepTime.update((seconds) => seconds + 1);
  }
</script>

<button type="button" class="" on:click={ increment }>
  +
</button>


