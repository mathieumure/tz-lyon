<style>
main {
  position: relative;
  background-color: var(--z-black);
  margin: 0 auto;
  box-sizing: border-box;
  padding: 3em 0;
}

@media (max-width: 1200px) {
  main {
    padding-bottom: 2em;
  }
}
</style>

<script>
import Header from "../components/layout/header/Header.svelte";
import TalkModal from '../components/talkModal/TalkModal.svelte'
import { selectedTalkStore } from "../stores";
</script>

<Header />
{#if $selectedTalkStore}
  <TalkModal />
{/if}
<main>
  <slot />
</main>
