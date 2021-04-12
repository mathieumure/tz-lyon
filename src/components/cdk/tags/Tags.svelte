<style>
ul {
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
}

li {
  display: flex;
}

ul > li:not(:last-child) {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  ul {
    justify-content: center;
  }
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
