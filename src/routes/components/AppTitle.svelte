<script>
  import { appTitleString } from '$lib/strings.js';
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="app-header">
  <h1 class="app-title">
    <span aria-hidden="true">⏲</span> INTERVAL TIMER <span aria-hidden="true">⏰</span>
  </h1>
  <ThemeToggle />
</header>

<style>
  .app-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5em 1em;
  }

  .app-title {
    color: var(--colorRed);
    letter-spacing: -0.5px;
    text-align: center;
    transition: color 0.25s ease;
  }

  @media screen and (max-width: 40em) {
    .app-title {
      font-size: 1.1rem;
      letter-spacing: -0.25px;
    }
  }
</style>
