<style>
.speakers {
  position: relative;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
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
