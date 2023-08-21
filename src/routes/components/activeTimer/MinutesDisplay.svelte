<script>
  import { activeMinutes } from '$lib/stores.js';
</script>

<h1 title="Activity Minutes">
  {$activeMinutes < 10 ? `0${$activeMinutes}` : $activeMinutes}
</h1>
