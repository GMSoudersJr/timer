<script>
  import { inactiveSeconds } from '$lib/stores.js';
</script>

<h1 title="Recovery Seconds">
  {$inactiveSeconds < 10 ? `0${$inactiveSeconds}` : $inactiveSeconds}
</h1>
