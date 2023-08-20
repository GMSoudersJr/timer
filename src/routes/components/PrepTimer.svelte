<script>
  import { prepTime } from '$lib/stores.js';
  import PrepIncrementer from './PrepIncrementer.svelte';
  import PrepDecrementer from './PrepDecrementer.svelte';
</script>

<div
  id="timer-display"
  class="timer-display"
>
  <h1>Prep</h1>
  <div class="container">
    <h1>
      {$prepTime}
    </h1>
    <PrepDecrementer />
    <PrepIncrementer />
  </div>

</div>
