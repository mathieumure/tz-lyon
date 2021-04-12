<style>
.tags {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
img {
  margin-right: 0.75rem;
}
</style>

<script>
import Tags from "../../../cdk/tags/Tags.svelte";
import { eventStore } from "../../../../stores";

export let categoryId, formatId, level;

const { categories, formats } = eventStore;

$: tags = [$categories.find((c) => c.id === categoryId).name, level];

const format = $formats.find((f) => f.id === formatId).name.includes("Workshop")
  ? "workshop"
  : "talk";
</script>

<div class="tags">
  <img
    src="/pictos/{format}.svg"
    title={format}
    width="50px"
    height="50px"
    alt="Logo {format}" />
  <Tags {tags} />
</div>
