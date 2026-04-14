<script>
  import { browser } from '$app/environment';

  let dark = $state(browser ? localStorage.getItem('theme') === 'dark' : false);

  $effect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
</script>

<button
  class="theme-toggle"
  onclick={() => (dark = !dark)}
  title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
  aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {dark ? '☀️' : '🌙'}
</button>

<style>
  .theme-toggle {
    font-family: var(--fontFamilyEmoji);
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25em;
    line-height: 1;
    user-select: none;
    position: absolute;
    right: 1em;
  }
</style>
