<script>
  import { activityMinutes, runningTimer } from '$lib/stores.js';
  import { activityMinutesDecrementorTitle } from '$lib/strings.js';
</script>

<button
  id="active-minutes-decrementer"
  title={ activityMinutesDecrementorTitle }
  type="button"
  class="button-decrementer"
  onclick={activityMinutes.decrement}
  disabled={ $runningTimer }
>
  ➖
</button>
