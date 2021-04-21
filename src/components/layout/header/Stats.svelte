<style>
.stats {
  list-style: none;
  margin: 2em 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

.stat.participants {
  display: none;
}

@media only screen and (min-width: 768px) {
  .stat.participants {
    display: block;
  }

  .stats {
    width: 75%;
  }
}
</style>

<script>
import Stat from "./Stat.svelte";
import { eventStore } from "../../../stores";
import { derived } from "svelte/store";

const { talks, speakers, formats } = eventStore;

const count = derived([talks, formats], ([$talks, $formats]) => {
  const workshopFormatsIds = $formats
    .filter((format) => format.name.includes("Workshop"))
    .map((format) => format.id);
  const workshopTalks = $talks.filter((talk) =>
    workshopFormatsIds.includes(talk.formats)
  );
  return {
    talks: $talks.length - workshopTalks.length,
    workshops: workshopTalks.length,
  };
});
</script>

<ul class="stats">
  <li class="stat">
    <Stat count={$count.talks} picto="talks.svg" title="Talks" />
  </li>
  <li class="stat">
    <Stat count={$count.workshops} picto="workshops.svg" title="Workshops" />
  </li>
  <li class="stat">
    <Stat count={$speakers.length} picto="speaker.svg" title="Speakers" />
  </li>
  <li class="stat participants">
    <Stat count={500} picto="participants.svg" title="Participants" />
  </li>
</ul>
