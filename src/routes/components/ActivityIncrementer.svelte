<script>
  import { activityTime } from '$lib/stores.js';

  function increment() {
    activityTime.update((seconds) => seconds + 1);
  }
</script>

<button type="button" class="" on:click={ increment }>
  +
</button>


