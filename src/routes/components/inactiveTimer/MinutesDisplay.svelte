<script>
  import { inactiveMinutes } from '$lib/stores.js';
</script>

<h1 title="Recovery Minutes">
  {$inactiveMinutes < 10 ? `0${$inactiveMinutes}` : $inactiveMinutes}
</h1>
