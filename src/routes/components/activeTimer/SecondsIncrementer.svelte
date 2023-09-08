<script>
  import { activitySeconds, runningTimer } from '$lib/stores.js';
  import { activitySecondsIncrementorTitle } from '$lib/strings.js';
</script>

<button
  id="active-seconds-incrementer"
  title={ activitySecondsIncrementorTitle }
  type="button"
  class="button-incrementer"
  on:click={ activitySeconds.increment }
  disabled={ $runningTimer }
>
  ➕
</button>
