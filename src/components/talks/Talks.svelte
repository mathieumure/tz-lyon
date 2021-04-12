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
  width: calc((100vw - 5 * 2rem) / 4);
  margin: 2.25rem 1rem;
}

@media (max-width: 1800px) {
  li {
    width: calc((100vw - 4 * 2rem) / 3);
  }
}

@media (max-width: 1024px) {
  li {
    width: calc((100vw - 3 * 2rem) / 2);
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

const { talks } = eventStore;

$: filteredTalks = $talks.filter(
  (talk) => !$filterStore || talk.categories === $filterStore
);
</script>

<ul>
  {#each filteredTalks as { abstract, categories, formats, id, language, level, speakers, title } (id)}
    <li>
      <Talk
        {abstract}
        {categories}
        {formats}
        {language}
        {level}
        {speakers}
        {title} />
    </li>
  {:else}
    <p>Il n'y a aucun talk dans cette catégorie.</p>
  {/each}
</ul>
