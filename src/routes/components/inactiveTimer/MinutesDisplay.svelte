<script>
  import { inactiveMinutes } from '$lib/stores.js';
</script>


<h1
  id="recovery-minutes"
  title="Recovery Minutes"
>
  {$inactiveMinutes < 10 ? `0${$inactiveMinutes}` : $inactiveMinutes}
</h1>
