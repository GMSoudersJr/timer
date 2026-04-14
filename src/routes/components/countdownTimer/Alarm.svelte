<script>
  import { timerToDisplay } from '$lib/stores.js';
  let audio = $state();

  $effect(() => {
    audio?.play().catch(error => console.log(error));
  });
</script>

<div class="alarm" role="alert" aria-live="assertive" aria-atomic="true">
  <h1>
    {$timerToDisplay == "activity" ? "Take A Break!" : "Get To Work!"}
  </h1>
  <audio
    src="https://freesound.org/data/previews/536/536420_4921277-lq.mp3"
    aria-label="Alarm sound"
    bind:this={audio}
  ></audio>
</div>
