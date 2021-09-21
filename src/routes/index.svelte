<script context="module">
import { eventStore } from "../stores";

export async function preload(page, session) {
  const res = await this.fetch(`event.json`);
  const event = await res.json();

  return { event };
}
</script>

<script>
import Talks from "../components/talks/Talks.svelte";
import Filters from "../components/filters/Filters.svelte";
export let event;

const { setEvent, description } = eventStore;
setEvent(event);
</script>

<svelte:head>
  <title>{$description.name} - Zenika</title>
</svelte:head>

<h1>Le programme</h1>
<Filters />
<Talks />
