<script>
  import { activityMinutes, runningTimer } from '$lib/stores.js';
</script>

<button
  id="active-minutes-incrementer"
  title="Increase Activity Minutes"
  type="button"
  class="button-incrementer"
  on:click={ activityMinutes.increment }
  disabled={ $runningTimer }
>
  ➕
</button>

