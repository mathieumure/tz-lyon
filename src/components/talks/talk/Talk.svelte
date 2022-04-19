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
  height: 100%;
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
  margin-top: auto;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.video-link {
  display: flex;
  margin: 0 auto 0 1rem;
}

img.yt-icon {
  height: 42px;
  width: 42px;
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
import DetailsButton from "./detailsButton/detailsButton.svelte";
import { eventStore, selectedTalkStore } from "../../../stores";
import snarkdown from "snarkdown";

export let abstract,
  categories,
  displayFullAbstract,
  formats,
  hideDetailsButton,
  id,
  language,
  level,
  speakers,
  title,
  showHours,
  showVideoLink,
  videoConfLink,
  startTime,
  track;

const { formats: storeFormats, tracks, levels } = eventStore;

const format = $storeFormats.find((f) => f.id === formats).name;
const { room } = $tracks.find(t => t.id === track);
const { name: levelName } = $levels.find(l => l.id === level);

// @todo add short abstract to json ?
$: abstract140 = `${abstract.slice(0, 140)}${
  abstract.length > 140 ? "..." : ""
}`;

// snarkdown generates empty links for, e.g., "[EN]"
$: abstractHtml = snarkdown(displayFullAbstract ? abstract : abstract140).replace(
  /<a href="undefined">(.*?)<\/a>/g,
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
    <p class="text-xs">{@html abstractHtml}</p>
  </section>
  <footer>
    <TalkTags categoryId={categories} level={levelName} {format} {showHours} {startTime} />
    <div class="footer-bottom">
      <TalkMeta {language} {format} {room} />
      {#if showVideoLink}
        <a
          class="video-link"
          href={videoConfLink}
          target="_blank"
          aria-label="Lien vers la présentation sur YouTube">
          <img class="yt-icon" src="logos/networks/youtube.svg" alt="YouTube" />
        </a>
      {/if}
      {#if !hideDetailsButton}
        <DetailsButton on:click={handleDetailButtonClick} />
      {/if}
    </div>
  </footer>
</article>
