<style>
    .time-tag__value {
        font-size: 1.25rem;
        line-height: 1.25rem;
        font-weight: bold;
        margin-left: 0.25rem;
    }

    .time-tag__label {
        margin-left: 0.125rem;
    }
</style>

<script>
  import MainTag from "./MainTag.svelte";

  export let hour, minutes;

  $: hourFormatted = `${hour}`.padStart(2, '0');
  $: minutesFormatted = `${minutes}`.padStart(2, '0');
</script>

<MainTag class={$$props.class} iconSrc="/pictos/clock.svg" ariaLabel="Durée">
  {#if hour !== null && hour >= 0}
    <span class="time-tag__value">{hourFormatted}</span>
    <span class="time-tag__label">h</span>
  {/if}
  {#if minutes !== null && minutes >= 0}
    <span class="time-tag__value">{minutesFormatted}</span>
  {/if}
</MainTag>
