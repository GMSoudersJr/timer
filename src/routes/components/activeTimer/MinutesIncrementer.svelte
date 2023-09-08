<script>
  import { activityMinutes, runningTimer } from '$lib/stores.js';
  import { activityMinutesIncrementorTitle } from '$lib/strings.js';
</script>

<button
  id="active-minutes-incrementer"
  title={ activityMinutesIncrementorTitle }
  type="button"
  class="button-incrementer"
  on:click={ activityMinutes.increment }
  disabled={ $runningTimer }
>
  ➕
</button>

