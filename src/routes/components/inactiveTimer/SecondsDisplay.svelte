<script>
  import { inactiveSeconds } from '$lib/stores.js';
</script>

<h1
  id="recovery-seconds"
  title="Recovery Seconds"
>
  {$inactiveSeconds < 10 ? `0${$inactiveSeconds}` : $inactiveSeconds}
</h1>
