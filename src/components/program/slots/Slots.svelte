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

    .track-row {
        width: 100%;
    }
</style>

<script>
  import Slot from "./Slot.svelte";

  export let slots;

  $: sortedSlots = slots?.sort((a, b) => a.track < b.track ? 1 : -1) ?? []
</script>

<ul class="track-row">
  {#each sortedSlots as talk}
    <Slot talk={talk} />
  {/each}
</ul>
