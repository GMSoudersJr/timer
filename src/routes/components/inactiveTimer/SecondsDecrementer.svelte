<script>
  import { recoverySeconds, runningTimer } from '$lib/stores.js';
  import { recoverySecondsDecrementorTitle } from '$lib/strings.js';
</script>

<button
  id="inactive-seconds-decrement"
  title={recoverySecondsDecrementorTitle}
  type="button"
  class="button-decrementer"
  onclick={recoverySeconds.decrement}
  disabled={ $runningTimer }
>
  ➖
</button>

