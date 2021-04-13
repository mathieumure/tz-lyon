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

h3.talk-title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.75rem;
  margin-top: .25rem;
}

@media (max-width: 600px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>

<script>
import TalkTags from "./tags/TalkTags.svelte";
import TalkSpeakers from "./speakers/TalkSpeakers.svelte";
import TalkMeta from "./meta/TalkMeta.svelte";
import { eventStore } from "../../../stores";


export let abstract, categories, formats, language, level, speakers, title;

const { formats: storeFormats } = eventStore;

// @todo add short abstract to json ?
$: abstract140 = `${abstract.slice(0, 140)}${
  abstract.length > 140 ? "..." : ""
}`;
const format = $storeFormats.find((f) => f.id === formats).name;
</script>

<article class="wrapper">
  <header>
    <TalkSpeakers speakersIds={speakers} />
  </header>
  <section>
    <h3 class="talk-title">{title}</h3>
    <p class="text-xs">{abstract140}</p>
  </section>
  <footer>
    <TalkTags categoryId={categories} {level} {format} />
    <TalkMeta {language} {format} />
  </footer>
</article>
