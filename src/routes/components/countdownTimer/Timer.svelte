<script>
  export let timerName;
  export let clock;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
