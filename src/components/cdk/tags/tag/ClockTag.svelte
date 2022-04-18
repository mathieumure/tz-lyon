<style>
    .clock-tag-time {
        border-radius: 2rem;
        display: inline-flex;
        align-items: center;
        background: white;
        padding: 0.375rem 0.75rem;
        margin-right: 1rem;
    }

    .clock-tag__value,
    .clock-tag__label {
        color: var(--z-red-dark);
    }

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
  export let hour, minutes;
</script>

<div class="clock-tag-time" aria-label="Durée">
  <img src="/pictos/clock.svg" alt="" />
  {#if hour !== null && hour >= 0}
    <span class="clock-tag__value">{hour}</span>
    <span class="clock-tag__label">h</span>
  {/if}
  {#if minutes !== null && minutes >= 0}
    <span class="clock-tag__value">{minutes}</span>
    <span class="clock-tag__label">min</span>
  {/if}
</div>
