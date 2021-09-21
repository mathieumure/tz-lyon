<script context="module">
import { eventStore } from "../stores";

export async function preload(page, session) {
  const res = await this.fetch(`event.json`);
  const event = await res.json();

  event.talks.sort((t1, t2) => {
      const [t1h1, t1h2] = t1.startTime.split("h");
      const [t2h1, t2h2] = t2.startTime.split("h");

      if (t2h1 < t1h1) return 1;
      else if (t2h1 > t1h1) return -1;
      else if (t2h2 < t1h2) return 1;
      else if (t2h2 > t1h2) return -1;

      return 0;
    })

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
