<style>
.speakers {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  margin-right: 0.75rem;
}
</style>

<script>
import Speaker from "../../../cdk/speaker/Speaker.svelte";
import { eventStore } from "../../../../stores";

export let speakersIds = [];

const { speakers: speakersStore } = eventStore;

const speakers = speakersIds.map((id) =>
  $speakersStore.find((s) => s.uid === id)
);

const displayVertical = speakers.length > 2;
const displayTight = speakers.length > 3;
</script>

<ul class="speakers">
  {#each speakers as speaker}
    <li>
      <Speaker {speaker} {displayVertical} {displayTight} />
    </li>
  {/each}
</ul>
