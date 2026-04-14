<script>
  import { currentIntervalId } from '$lib/stores.js';
  import { activityTimerTitleString } from '$lib/strings.js';
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
  <title>💦 {clock}</title>
</svelte:head>

<div class="container">
  <h2 class="timer-text">{activityTimerTitleString}</h2>
  <p
    class="timer"
    role="timer"
    aria-label="Activity time remaining"
    aria-live="off"
  >
    {clock}
  </p>
</div>

<style>
  .container {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
