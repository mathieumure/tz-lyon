<style>
ul {
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
}

li {
  display: flex;
  margin: 0.25rem;
}
</style>

<script>
export let tags;
import Tag from "./tag/Tag.svelte";
</script>

<ul>
  {#each tags as tag}
    <li>
      <Tag {tag} />
    </li>
  {/each}
</ul>
