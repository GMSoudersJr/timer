<script>
  import '../app.css';
  import ActivityTimer from './components/activeTimer/SetTimer.svelte';
  import RecoveryTimer from './components/inactiveTimer/SetTimer.svelte';
  import Display from './components/countdownTimer/Display.svelte';
</script>

<div class="app-container">
  <ActivityTimer />
  <RecoveryTimer />
  <Display />
</div>
