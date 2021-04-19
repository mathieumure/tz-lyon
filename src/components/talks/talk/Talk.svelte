<style>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--dark-grey);
  border-radius: var(--card-border-radius);
  color: white;
  padding: 0 1.125rem 1.125rem;
}

section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 2rem);
  height: auto;
  margin-top: 0.5rem;
}

h2.talk-title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.75rem;
  margin-top: 0.25rem;
}

footer {
  width: 100%;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

@media (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>

<script>
import TalkTags from "./tags/TalkTags.svelte";
import TalkSpeakers from "./speakers/TalkSpeakers.svelte";
import TalkMeta from "./meta/TalkMeta.svelte";
import DetailsButton from "./detailsButton/detailsButton.svelte"
import { eventStore, selectedTalkStore } from "../../../stores";
import snarkdown from "snarkdown";

export let abstract, categories, formats, hideDetailsButton, id, isShortAbstract, language, level, speakers, title;

const { formats: storeFormats } = eventStore;

const format = $storeFormats.find((f) => f.id === formats).name;

// @todo add short abstract to json ?
$: abstract140 = `${abstract.slice(0, 140)}${
  abstract.length > 140 ? "..." : ""
}`;

// snarkdown generates empty links for, e.g., "[EN]"
$: abstractHtml = snarkdown(abstract140).replace(
  /<a href="undefined">(.*?)<\/a>/,
  "[$1]"
);

const handleDetailButtonClick = () => selectedTalkStore.set(id);
</script>

<article class="wrapper">
  <header>
    <TalkSpeakers speakersIds={speakers} />
  </header>
  <section>
    <h2 class="talk-title">{title}</h2>
    <p class="text-xs">{@html isShortAbstract ? abstractHtml : abstract}</p>
  </section>
  <footer>
    <TalkTags categoryId={categories} {level} {format} />
    <div class="footer-bottom">
      <TalkMeta {language} {format} />
      {#if !hideDetailsButton}
        <DetailsButton on:click={handleDetailButtonClick} />
      {/if}
    </div>
  </footer>
</article>
