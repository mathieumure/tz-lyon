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
  import Filters from "../components/filters/Filters.svelte";
  import Talks from "../components/talks/Talks.svelte";

  export let event;

  const { setEvent, description } = eventStore;
  setEvent(event);
</script>

<svelte:head>
  <title>Talks - {$description.name} - Zenika</title>
</svelte:head>

<h1>Les talks</h1>
<Filters />
<Talks />
