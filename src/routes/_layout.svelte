<style>
main {
  position: relative;
  background-color: var(--z-black);
  margin: 0 auto;
  box-sizing: border-box;
  padding: 5em 0;
}

@media (max-width: 1200px) {
  main {
    padding-bottom: 2em;
  }
}
</style>

<script>
import Header from "../components/layout/header/Header.svelte";
</script>

<Header />
<main>
  <slot />
</main>
