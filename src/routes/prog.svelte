<script context="module">
import { eventStore } from "../stores";

export async function preload() {
  const res = await this.fetch(`event.json`);
  const event = await res.json();

  event.talks.sort((t1, t2) => {
    return new Date(t1.startTime) - new Date(t2.startTime);
  });

  return { event };
}
</script>

<script>
import Program from "../components/program/Program.svelte";
export let event;

const { setEvent, description } = eventStore;
setEvent(event);
</script>

<svelte:head>
  <title>Program - {$description.name} - Zenika</title>
</svelte:head>

<main>
  <h1>Programme</h1>
  <Program />
</main>
