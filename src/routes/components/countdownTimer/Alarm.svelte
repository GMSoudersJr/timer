<script>
  import { onMount } from 'svelte';
  import { timerToDisplay } from '$lib/stores.js';
  let audio

  onMount(() => {
    audio
      .play()
      .catch(error => console.log(error));
  })
</script>

<div class="alarm">
  <h1>
{$timerToDisplay == "activity" ? "Take A Break!" : "Get To Work!"}
  </h1>
  <audio src="https://freesound.org/data/previews/536/536420_4921277-lq.mp3"
    bind:this={audio}
  ></audio>
</div>
