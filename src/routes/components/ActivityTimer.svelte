<script>
  import { activityTime } from '$lib/stores.js';
  import ActivityIncrementer from './ActivityIncrementer.svelte';
  import ActivityDecrementer from './ActivityDecrementer.svelte';
</script>

<div
  id="timer-display"
  class="timer-display"
>
  <h1>Activity</h1>
  <div class="container">
    <h1>
      {$activityTime}
    </h1>
    <ActivityDecrementer />
    <ActivityIncrementer />
  </div>

</div>

