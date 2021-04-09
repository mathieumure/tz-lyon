<style>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
}

li {
  width: 30%;
  margin: 2rem 1rem;
}

h2 {
  color: white;
  text-align: center;
}

@media (max-width: 1024px) {
  li {
    width: 45%;
  }
}

@media (max-width: 768px) {
  li {
    width: 90%;
  }
}
</style>

<script>
    import Talk from "./talk/Talk.svelte";
    import { eventStore, filterStore } from "../../stores";

    const { talks } = eventStore;

    $: filteredTalks = $talks.filter(talk => !$filterStore || talk.categories === $filterStore);
</script>

<h2>Le programme</h2>
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
