<style>
    .clock-tag__value {
        font-size: 1.25rem;
        line-height: 1.25rem;
        font-weight: bold;
        margin-left: 0.25rem;
    }

    .clock-tag__label {
        margin-left: 0.125rem;
    }
</style>

<script>
  import MainTag from "./MainTag.svelte";

  export let hour, minutes;
</script>

<MainTag class={$$props.class} iconSrc="/pictos/clock.svg" ariaLabel="Durée">
  {#if hour !== null && hour >= 0}
    <span class="clock-tag__value">{hour}</span>
    <span class="clock-tag__label">h</span>
  {/if}
  {#if minutes !== null && minutes >= 0}
    <span class="clock-tag__value">{minutes}</span>
    <span class="clock-tag__label">min</span>
  {/if}
</MainTag>
