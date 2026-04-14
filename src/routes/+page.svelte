<script>
  import { headTitleString } from '$lib/strings.js';
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
    <ActivityTimer />
    <RecoveryTimer />
  {/if}
  <Display />
</div>
