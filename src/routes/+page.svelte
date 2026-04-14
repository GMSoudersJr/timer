<script>
  import { headTitleString, taglineString } from '$lib/strings.js';
  import { timerToDisplay } from '$lib/stores.js';
  import AppTitle from './components/AppTitle.svelte';
  import ActivityTimer from './components/activeTimer/SetTimer.svelte';
  import RecoveryTimer from './components/inactiveTimer/SetTimer.svelte';
  import Display from './components/countdownTimer/Display.svelte';
</script>

<svelte:head>
   <title>
     {headTitleString}
   </title>
</svelte:head>

<div class="app-container">
  <AppTitle />
  {#if !$timerToDisplay}
    <p class="tagline">{taglineString}</p>
    <ActivityTimer />
    <RecoveryTimer />
  {/if}
  <Display />
</div>

<style>
  .tagline {
    font-family: var(--fontFamilyText);
    font-size: 1.1em;
    font-weight: 600;
    color: var(--colorCharcoal);
    letter-spacing: 0.03em;
    transition: color 0.25s ease;
  }
</style>
