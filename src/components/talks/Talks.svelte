<style>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0;
}

li {
  width: 23%;
  margin: 2.25rem 1rem;
}

@media (max-width: 1800px) {
  li {
    width: 30%;
  }
}

@media (max-width: 1200px) {
  li {
    width: 45%;
  }
}

@media (max-width: 768px) {
  li {
    width: 100%;
    margin: 2.25rem 0;
  }
}
</style>

<script>
import Talk from "./talk/Talk.svelte";
import { eventStore, filterStore } from "../../stores";

export let showHours = true,
  showVideoLink = false;

const { talks, description } = eventStore;

$: filteredTalks = $talks
  .filter(talk => !$filterStore.trackId || talk.track === $filterStore.trackId)
  .filter(talk => !$filterStore.categoryId || talk.categories === $filterStore.categoryId);
</script>

<ul>
  {#each filteredTalks as { abstract, categories, formats, id, language, level, speakers, title, startTime, videoConfLink, track } (id)}
    <li>
      <Talk
        {abstract}
        {categories}
        {formats}
        {id}
        {language}
        {level}
        {speakers}
        {title}
        {startTime}
        {videoConfLink}
        {showHours}
        {showVideoLink}
        {track} />
    </li>
  {:else}
    <p>Il n'y a aucun talk pour ces filtres.</p>
  {/each}
</ul>
