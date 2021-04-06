<script>
	import Header from '../components/layout/header/Header.svelte';
</script>

<style>
  main {
    position: relative;
    background-color: black;
    margin: 0 auto;
    box-sizing: border-box;
    padding-bottom: 5em;
  }

  @media (max-width: 1200px) {
    main {
      padding-bottom: 2em;
    }
  }
</style>

<Header />
<main>
  <slot />
</main>