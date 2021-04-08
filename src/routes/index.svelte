<script context="module">
	  import { eventStore } from "../stores";

	export async function preload(page, session) {
		const res = await this.fetch(`event.json`);
		const event = await res.json()

		return { event };
	}
</script>

<script>
	import Talks from '../components/talks/Talks.svelte'
	import Filters from '../components/filters/Filters.svelte'
	export let event;

	const { setEvent } = eventStore;
	setEvent(event)
</script>

<style>
</style>

<svelte:head>
	<title>Technozaure World 2021 - Zenika</title>
</svelte:head>

<Filters/>
<Talks/>
