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

export let showHours = false,
  showVideoLink = false;

const { talks } = eventStore;

$: filteredTalks = $talks.filter(
  (talk) => !$filterStore || talk.categories === $filterStore
);
</script>

<ul>
  {#each filteredTalks as { abstract, categories, formats, id, language, level, speakers, title, startTimeCa, startTimeSg, startTimeFr, videoConfLink } (id)}
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
        {startTimeCa}
        {startTimeSg}
        {startTimeFr}
        {videoConfLink}
        {showHours}
        {showVideoLink} />
    </li>
  {:else}
    <p>Il n'y a aucun talk dans cette catégorie.</p>
  {/each}
</ul>
