<script>
  import { recoveryTimerTitleString } from '$lib/strings.js';
  import { currentIntervalId } from '$lib/stores.js';
  let { clock, callback } = $props();

  $effect(() => {
    const interval = setInterval(() => callback(), 1000);
    currentIntervalId.set(interval);
    return () => {
      clearInterval(interval);
      currentIntervalId.set(null);
    };
  });
</script>

<svelte:head>
  <title>🧘 {clock}</title>
</svelte:head>

<div class="container">
  <h2 class="timer-text">{recoveryTimerTitleString}</h2>
  <p
    class="timer"
    role="timer"
    aria-label="Recovery time remaining"
    aria-live="off"
  >
    {clock}
  </p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 0.25em;
  }

  .container :global(.timer) {
    font-size: 5em;
  }

  @media screen and (max-width: 40em) {
    .container :global(.timer) {
      font-size: 3.5em;
    }
  }
</style>
