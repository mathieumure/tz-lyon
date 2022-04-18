<style>
    .time-tag-time {
        border-radius: 2rem;
        display: inline-flex;
        align-items: center;
        background: white;
        padding: 0.375rem 0.75rem;
    }

    .time-tag__value,
    .time-tag__label {
        color: var(--z-red-dark);
    }

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
  export let hour, minutes;

  $: hourFormatted = `${hour}`.padStart(2, '0');
  $: minutesFormatted = `${minutes}`.padStart(2, '0');
</script>

<div class="time-tag-time" aria-label="Durée">
  <img src="/pictos/clock.svg" alt="" />
  {#if hour !== null && hour >= 0}
    <span class="time-tag__value">{hourFormatted}</span>
    <span class="time-tag__label">h</span>
  {/if}
  {#if minutes !== null && minutes >= 0}
    <span class="time-tag__value">{minutesFormatted}</span>
  {/if}
</div>
