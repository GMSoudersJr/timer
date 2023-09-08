<script>
  import { activityMinutes } from '$lib/stores.js';
  import { activityMinutesTitle } from '$lib/strings.js';
</script>

<h1
  id="activity-minutes"
  title={ activityMinutesTitle }
  class="timer-digits"
>
  {$activityMinutes < 10 ? `0${$activityMinutes}` : $activityMinutes}
</h1>
