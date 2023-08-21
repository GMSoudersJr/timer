<script>
  import '../app.css';
  import ActivityTimer from './components/activeTimer/SetTimer.svelte';
  import RecoveryTimer from './components/inactiveTimer/SetTimer.svelte';
</script>

<div class="app-container">
  <RecoveryTimer />
  <ActivityTimer />
</div>
