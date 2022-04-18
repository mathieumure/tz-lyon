<style>
    li {
        margin: 2.25rem 1rem;
        width: 23%;
    }

    @media (max-width: 1800px) {
        li {
            width: 30%;
        }
    }

    @media (max-width: 1200px) {
        li {
            width: 45%;
        }
    }

    @media (max-width: 768px) {
        li {
            width: 100%;
            margin: 2.25rem 0;
        }
    }
</style>

<script>
  import Talk from "../../talks/talk/Talk.svelte";

  export let talk;
</script>

{#if talk}
  <li>
    <Talk {...talk} />
  </li>
{/if}
