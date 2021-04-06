<script>
  import Stat from "./Stat.svelte";

  export let talks = [],
    speakers = [];
</script>

<div class="stats">
  <Stat class="stat" count={talks.length} picto="talk.svg" title="Talks" />
  <Stat class="stat" count={43} picto="workshops.svg" title="Workshops" />
  <Stat
    class="stat"
    count={speakers.length}
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
    margin: 0 2rem 1rem;
  }
</style>
