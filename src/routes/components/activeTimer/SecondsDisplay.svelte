<script>
  import { activitySeconds } from '$lib/stores.js';
</script>

<h1
  id="activity-seconds"
  title="Activity Seconds"
  class="timer-digits"
>
  {$activitySeconds < 10 ? `0${$activitySeconds}` : $activitySeconds}
</h1>
