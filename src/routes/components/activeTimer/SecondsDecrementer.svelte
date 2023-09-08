<script>
  import { activitySeconds, runningTimer } from '$lib/stores.js';
  import { activitySecondsDecrementorTitle } from '$lib/strings.js';
</script>

<button
  id="active-seconds-decrementer"
  title={ activitySecondsDecrementorTitle }
  type="button"
  class="button-decrementer"
  on:click={ activitySeconds.decrement }
  disabled={ $runningTimer }
>
  ➖
</button>


