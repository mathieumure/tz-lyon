<style>
    .main-tag {
        border-radius: 2rem;
        display: inline-flex;
        align-items: center;
        background: white;
        padding: 0.375rem 0.75rem;
        color: var(--z-red-dark);
    }
</style>

<script>
  export let iconSrc, ariaLabel;

  $: classNames = $$props.class ? `main-tag ${$$props.class}` : 'main-tag'
</script>

<div class={classNames} aria-label={ariaLabel}>
  {#if iconSrc}<img src={iconSrc} alt="" />{/if}
  <slot />
</div>
