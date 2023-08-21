<script>
  import { onInterval } from '$lib/utils.js';
  import { inactiveSeconds } from '$lib/stores.js';
  import PrepIncrementer from './PrepIncrementer.svelte';
  import PrepDecrementer from './PrepDecrementer.svelte';

  export let interval = 1000;
  export let clock;
  export let callback;

  let seconds = $inactiveSeconds;
  onInterval(() => (seconds += 1), 1000);
</script>

<div
  id="timer-display"
  class="timer-display"
>
  <h1>Inactive</h1>
  <div class="container">
    <h1>
      {$inactiveSeconds}
    </h1>
    <PrepDecrementer />
    <PrepIncrementer />
  </div>

</div>
