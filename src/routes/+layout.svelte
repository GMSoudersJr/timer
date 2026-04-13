<script>
  import Footer from './components/Footer.svelte';
  import  '../app.css';
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

{@render children?.()}
<Footer />

<style>
</style>
