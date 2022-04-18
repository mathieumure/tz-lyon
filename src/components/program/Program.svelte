<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 2rem;
    }
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 1rem;
        box-sizing: border-box;
        margin: 0;
    }

    :global(.time-tag-time) {
        justify-content: center;
        width: 92vw;
    }

    @media only screen and (min-width: 768px) {
      :global(.time-tag-time) {
          width: 87vw;
      }
    }

    @media only screen and (min-width: 1200px) {
        :global(.time-tag-time) {
            width: 59vw;
        }
    }

    .title {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.75rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .track-row {
        width: 100%;
    }

</style>

<script>
  import { eventStore } from "../../stores";
  import Slot from "./slots/Slot.svelte";
  import TimeTag from "../cdk/tags/tag/TimeTag.svelte";

  const { slots, talks } = eventStore;

  $: talksByStartTime = $talks.reduce((acc, cur) => {
    acc[cur.startTime] = acc[cur.startTime] || []
    acc[cur.startTime].push(cur);
    return acc;
  }, {});
</script>

<section class="wrapper">
  {#each $slots as { startTime, talk, name }}
    <TimeTag hour={new Date(startTime).getHours()} minutes={new Date(startTime).getMinutes()} />
    {#if talk}
      <ul class="track-row">
        <Slot talk={talksByStartTime[startTime][0]} />
        <Slot talk={talksByStartTime[startTime][1]} />
      </ul>
    {:else}
      <h2 class="title">{name}</h2>
    {/if}
  {/each}
</section>
