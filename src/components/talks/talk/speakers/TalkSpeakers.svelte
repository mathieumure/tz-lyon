<style>
.speakers {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  margin-right: .5rem;
}
</style>

<script>
import Speaker from "../../../cdk/speaker/Speaker.svelte";

export let speakers;
</script>

<ul class="speakers">
  {#each speakers as speaker}
    <li>
      <Speaker id={speaker} />
    </li>
  {/each}
</ul>
