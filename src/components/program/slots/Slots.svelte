<style>
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 1rem;
        box-sizing: border-box;
        margin: 0;
    }
</style>

<script>
  import { eventStore } from "../../stores";
  import ClockTag from "../cdk/tags/tag/ClockTag.svelte";
  import Slot from "./slots/Slot.svelte";

  const { slots, talks } = eventStore;

  $: talksByStartTime = $talks.reduce((acc, cur) => {
    acc[cur.startTime] = acc[cur.startTime] || []
    acc[cur.startTime].push(cur);
    return acc;
  }, {});
</script>
