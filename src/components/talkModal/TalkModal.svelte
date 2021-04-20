<style>
.talk-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}

.talk-wrapper {
  width: 800px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  padding-top: 45px;
}
</style>

<script>
import { fade } from "svelte/transition";
import Portal from "svelte-portal/src/Portal.svelte";
import Talk from "../talks/talk/Talk.svelte";
import { eventStore, selectedTalkStore } from "../../stores";

const { talks } = eventStore;
const selectedTalk = $talks.find((talk) => talk.id === $selectedTalkStore);
const {
  abstract,
  categories,
  formats,
  id,
  language,
  level,
  speakers,
  title,
} = selectedTalk;

const handleBackdropClick = () => selectedTalkStore.set("");
</script>

<Portal>
  <div class="talk-modal" transition:fade={{ duration: 150 }}>
    <div class="backdrop" on:click={handleBackdropClick} />
    <div class="talk-wrapper">
      <Talk
        hideDetailsButton
        displayFullAbstract
        {abstract}
        {categories}
        {formats}
        {id}
        {language}
        {level}
        {speakers}
        {title} />
    </div>
  </div>
</Portal>
