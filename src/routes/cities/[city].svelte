<script context="module">
import { eventStore } from "../../stores";

export async function preload(page, session) {
  const res = await this.fetch(`event.json`);
  const event = await res.json();
  const { city } = page.params;
  event.talks = event.talks
    .filter((talk) => talk.trackName.toUpperCase() === city.toUpperCase())
    .sort((t1, t2) => {
      const [t1h1, t1h2] = t1.startTimeFr.split("h");
      const [t2h1, t2h2] = t2.startTimeFr.split("h");

      if (t2h1 < t1h1) return 1;
      else if (t2h1 > t1h1) return -1;
      else if (t2h2 < t1h2) return 1;
      else if (t2h2 > t1h2) return -1;

      return 0;
    });

  return { city: `${city.charAt(0).toUpperCase()}${city.slice(1)}`, event };
}
</script>

<script>
import Talks from "../../components/talks/Talks.svelte";
import Filters from "../../components/filters/Filters.svelte";
export let city, event;

const { setEvent } = eventStore;
setEvent(event);
</script>

<svelte:head>
  <title>Technozaure World 2021 - Zenika - {city}</title>
</svelte:head>

<h1>Le programme à {city}</h1>
<Filters />
<Talks showHours={true} showVideoLink={true} />
