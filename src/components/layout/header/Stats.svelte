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

<div class="stats">
  <Stat class="stat" count={$talks.length} picto="talk.svg" title="Talks" />
  <Stat
    class="stat"
    count={$workshopsCount}
    picto="workshops.svg"
    title="Workshops"
  />
  <Stat
    class="stat"
    count={$speakers.length}
    picto="speaker.svg"
    title="Speakers"
  />
  <Stat
    class="stat"
    count={500}
    picto="participants.svg"
    title="Participants"
  />
</div>

<style>
  .stats {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 75%;
  }

  .stats :global(.stat) {
    margin: 0 1rem 1rem;
  }
</style>
