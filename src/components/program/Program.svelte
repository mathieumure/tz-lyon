<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 2rem;
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

</style>

<script>
  import { eventStore } from "../../stores";
  import Slot from "./slots/Slot.svelte";
  import TimeTag from "../cdk/tags/tag/TimeTag.svelte";
  import Slots from "./slots/Slots.svelte";

  const { slots, talks } = eventStore;

  $: talksByStartTime = $talks.reduce((acc, cur) => {
    acc[cur.startTime] = acc[cur.startTime] || []
    acc[cur.startTime].push(cur);
    return acc;
  }, {});
</script>

<section class="wrapper">
  {#each $slots as { startTime, talk, name }}
    <TimeTag class="time-tag-time" hour={new Date(startTime).getHours()} minutes={new Date(startTime).getMinutes()} />
    {#if talk}
      <Slots slots={talksByStartTime[startTime]} />
    {:else}
      <h2 class="title">{name}</h2>
    {/if}
  {/each}
</section>
