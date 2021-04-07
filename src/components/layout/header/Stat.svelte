<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  export let picto,
    count = 0,
    title;

  let tweenedCount = tweened(0);

  onMount(() => {
    tweenedCount.set(count, {
      duration: 3000 * Math.min(count / 100, 1),
      easing: cubicOut,
    });
  });
</script>

<div>
  <img src={`pictos/${picto}`} alt={`picto - ${title}`} />
  <p class="stat-count">{Math.floor($tweenedCount)}</p>
  <p class="stat-title">{title}</p>
</div>

<style>
  .stat-count {
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 2rem;
    margin: 1rem 0 0;
  }

  img {
    width: 4rem;
  }

  @media only screen and (min-width: 768px) {
    img {
      width: auto;
    }
  }

  .stat-title {
    margin: 0;
    font-size: 1.25rem;
  }
</style>
