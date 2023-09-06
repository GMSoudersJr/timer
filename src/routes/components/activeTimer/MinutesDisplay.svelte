<script>
  import { activityMinutes } from '$lib/stores.js';
</script>

<h1
  id="activity-minutes"
  title="Activity Minutes"
  class="timer-digits"
>
  {$activityMinutes < 10 ? `0${$activityMinutes}` : $activityMinutes}
</h1>
