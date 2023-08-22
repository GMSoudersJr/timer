<script>
  export let clock;
  export let whichTimer;
</script>

<div class="container">
  <h2>{whichTimer}</h2>
  <div class="timer">
    {clock}
  </div>
</div>

<style>
  .timer {
    font-size: 2.5em;
  }
</style>
