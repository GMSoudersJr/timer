<script>
  import { activitySeconds } from '$lib/stores.js';
</script>

<button
  id="active-seconds-decrementer"
  title="Decrease Activity Seconds"
  type="button"
  class="button-decrementer"
  on:click={ activitySeconds.decrement }
>
  ➖
</button>


