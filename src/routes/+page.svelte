<script>
  import '../app.css';
  import { appTitleString, headTitleString } from '$lib/strings.js';
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
  <h1 class="app-title">
    {appTitleString}
  </h1>
  <ActivityTimer />
  <RecoveryTimer />
  <Display />
</div>
