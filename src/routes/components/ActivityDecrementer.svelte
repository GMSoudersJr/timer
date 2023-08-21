<script>
  import { activityTime } from '$lib/stores.js';

  function decrement() {
    if ( $activityTime > 0 ) {
      activityTime.update((seconds) => seconds - 1);
    } else {
      activityTime.update((seconds) => seconds = 59);
    }
  }
</script>

<button type="button" class="" on:click={ decrement }>
  -
</button>


