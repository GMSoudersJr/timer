<script>
  import { activitySeconds } from '$lib/stores.js';
  import { activitySecondsTitle } from '$lib/strings.js';
</script>

<h1
  id="activity-seconds"
  title={ activitySecondsTitle }
  class="timer-digits"
>
  {$activitySeconds < 10 ? `0${$activitySeconds}` : $activitySeconds} s
</h1>
