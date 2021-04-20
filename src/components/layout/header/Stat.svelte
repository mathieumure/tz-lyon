<style>
div {
  font-size: 1rem;
}

.stat-count {
  font-weight: bold;
  font-size: 1.25em;
  line-height: 1.25em;
  margin: 0.25em 0 0;
}

img {
  height: 4rem;
  width: 4rem;
}

.stat-title {
  margin: 0;
  font-size: 0.75em;
  line-height: 1.25em;
}

@media only screen and (min-width: 768px) {
  img {
    height: 6rem;
    width: 6rem;
  }

  div {
    font-size: 1.5rem;
  }
}
</style>

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
  <img src={`pictos/${picto}`} alt="" />
  <p class="stat-count">{Math.floor($tweenedCount)}</p>
  <p class="stat-title">{title}</p>
</div>
