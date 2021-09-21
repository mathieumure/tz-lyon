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

export let categoryId, format, level, showHours, startTime, room;

const { categories } = eventStore;

$: tags = [$categories.find((c) => c.id === categoryId).name, level];

$: if (showHours && startTime) tags.push(`🕥 ${startTime}`);

$: if (room) tags.push(`🏠 ${room}`);

const formatShort = format.includes("Workshop") ? "workshop" : "talk";
</script>

<div class="tags">
  <img
    src="/pictos/{formatShort}.svg"
    title={formatShort}
    width="50px"
    height="50px"
    alt="Logo {formatShort}" />
  <Tags {tags} />
</div>
