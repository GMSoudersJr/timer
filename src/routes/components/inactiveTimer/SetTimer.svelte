<script>
  import MinutesDisplay from './MinutesDisplay.svelte';
  import SecondsDisplay from './SecondsDisplay.svelte';
  import MinutesIncrementer from './MinutesIncrementer.svelte';
  import MinutesDecrementer from './MinutesDecrementer.svelte';
  import SecondsDecrementer from './SecondsDecrementer.svelte';
  import SecondsIncrementer from './SecondsIncrementer.svelte';
</script>

<div
  id="timer-display"
  class="set-timer-display"
>
  <h2 class="timer-text">Recovery Time</h2>
  <div id="recovery-timer" class="set-minutes-and-seconds-container">
    <div class="set-minutes-container">
      <MinutesDisplay />
      <div class="delta-button-container">
        <MinutesDecrementer />
        <MinutesIncrementer />
      </div>
    </div>
    <h1 class="time-colon">:</h1>
    <div class="set-seconds-container">
      <SecondsDisplay />
      <div class="delta-button-container">
        <SecondsDecrementer />
        <SecondsIncrementer />
      </div>
    </div>
  </div>
</div>
