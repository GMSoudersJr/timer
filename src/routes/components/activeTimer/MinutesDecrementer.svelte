<script>
  import { activityMinutes } from '$lib/stores.js';
</script>

<button
  id="active-minutes-decrementer"
  title="Decrease Activity Minutes"
  type="button"
  class="button-decrementer"
  on:click={ activityMinutes.decrement }
>
  ➖
</button>
