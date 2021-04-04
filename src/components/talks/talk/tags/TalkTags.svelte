<style>
</style>

<script>
import Tags from "../../../cdk/tags/Tags.svelte";
import { eventStore } from "../../../../stores";

export let categoryId, formatId, language, level;

const { categories, formats } = eventStore;

$: tags = [
  language === "French" ? "🇫🇷 FR" : "🇬🇧 EN",
  $categories.find((c) => c.id === categoryId).name,
  $formats.find((f) => f.id === formatId).name,
  level,
];
</script>

<Tags {tags} />
