<style>
:global(main) {
  position: relative;
  background-color: var(--z-black);
  margin: 0 auto;
  box-sizing: border-box;
  padding: 3em 0;
}

@media (max-width: 1200px) {
  :global(main) {
    padding-bottom: 2em;
  }
}
</style>

<script>
import TalkModal from '../components/talkModal/TalkModal.svelte'
import { selectedTalkStore } from "../stores";


if (
  typeof window !== "undefined"
  && window?.location?.protocol === "http:"
  && window?.location?.hostname !== "localhost"
) {
  window.location.protocol = "https:"
}
</script>

{#if $selectedTalkStore}
  <TalkModal />
{/if}
<slot />
