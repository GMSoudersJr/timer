<script>
  import { activitySeconds, runningTimer } from '$lib/stores.js';
</script>

<button
  id="active-seconds-incrementer"
  title="Increase Activity Seconds"
  type="button"
  class="button-incrementer"
  on:click={ activitySeconds.increment }
  disabled={ $runningTimer }
>
  ➕
</button>
