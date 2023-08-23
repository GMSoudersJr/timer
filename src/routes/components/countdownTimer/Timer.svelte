<script>
  export let clock;
  export let timerName;
</script>

<div class="container">
  <h2>{timerName}</h2>
  <h1 class="timer">
    {clock}
  </h1>
</div>

<style>
  .container {
    align-self: center;
  }
</style>
