<script>
  import { activeSeconds } from '$lib/stores.js';
</script>

<h1 title="Activity Seconds">
  {$activeSeconds < 10 ? `0${$activeSeconds}` : $activeSeconds}
</h1>
