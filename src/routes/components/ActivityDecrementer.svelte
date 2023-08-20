<script>
  import { activityTime } from '$lib/stores.js';

  function decrement() {
    activityTime.update((seconds) => seconds - 1);
  }
</script>

<button type="button" class="" on:click={ decrement }>
  -
</button>


