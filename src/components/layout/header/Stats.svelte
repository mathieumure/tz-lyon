<script>
  import Stat from "./Stat.svelte";
  import { eventStore } from "../../../stores";
  import { derived } from "svelte/store";

  const { talks, speakers, formats } = eventStore;

  const workshopsCount = derived([talks, formats], ([$talks, $formats]) => {
    const workshopFormatsIds = $formats
      .filter((format) => format.name.includes("Workshop"))
      .map((format) => format.id);
    const workshopTalks = $talks.filter((talk) =>
      workshopFormatsIds.includes(talk.formats)
    );
    return workshopTalks.length;
  });
</script>

<ul class="stats">
  <li class="stat">
    <Stat count={$talks.length} picto="talk.svg" title="Talks" />
  </li>
  <li class="stat">
    <Stat count={$workshopsCount} picto="workshops.svg" title="Workshops" />
  </li>
  <li class="stat">
    <Stat count={$speakers.length} picto="speaker.svg" title="Speakers" />
  </li>
  <li class="stat">
    <Stat count={500} picto="participants.svg" title="Participants" />
  </li>
</ul>

<style>
  .stats {
    list-style: none;
    margin: 0.75rem 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 75%;
  }

  .stat {
    margin: 0 1rem 1rem;
  }
</style>
