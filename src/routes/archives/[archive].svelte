<script context="module">
  import { eventStore } from "../../stores";

  export async function preload(page, session) {
    const { archive } = page.params;
    const res = await this.fetch(`archives/event-${archive}.json`);
    const event = await res.json();

    const archiveDate = new Date(event.conferenceDates.start).toLocaleDateString()

    return { event, archiveDate };
  }
</script>

<style>
  .header {
      display: flex;
      justify-content: center;
      padding: 1rem;
  }

</style>

<script>
  import Program from "../../components/program/Program.svelte";

  export let archiveDate, event;

  const { setEvent, description } = eventStore;
  setEvent(event);
</script>

<svelte:head>
  <title>{$description.name} - Zenika</title>
</svelte:head>

<header class="header">
  <a sapper:prefetch href="/">
    <img class="logo-tz" src="logos/technozaure.svg" alt="Technozaure" />
  </a>
</header>
<h1>Le programme du {archiveDate}</h1>
<main>
  <Program />
</main>

