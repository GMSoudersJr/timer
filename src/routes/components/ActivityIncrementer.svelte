<script>
  import { activityTime } from '$lib/stores.js';

  function increment() {
   if ( $activityTime < 59 ) {
      activityTime.update((seconds) => seconds + 1);
    } else {
      activityTime.update((seconds) => seconds = 0)
    }
  }
</script>

<button type="button" class="" on:click={ increment }>
  +
</button>
