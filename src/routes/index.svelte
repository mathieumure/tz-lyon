<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`_talks.json`);
		const talks = await res.json();
		return { talks };
	}
</script>

<script>
	import Talks from '../components/talks/Talks.svelte'
	export let talks;
</script>

<style>
</style>

<svelte:head>
	<title>Technozaure World 2021 - Zenika</title>
</svelte:head>

<Talks {talks}/>
