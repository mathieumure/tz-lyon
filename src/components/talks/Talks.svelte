<script>
    import Talk from "./talk/Talk.svelte";
    import { eventStore } from "../../stores";

    const { talks } = eventStore;
  </script>
  
  <style>
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
      margin: 0;
    }
  
    li {
      width: 45%;
      padding: 0.5rem;
      margin: 1rem 0;
    }
  
    @media (max-width: 1200px) {
      li {
        width: auto;
      }
    }
  </style>

  <ul>
    {#each $talks as talk (talk.id)}
      <li>
        <Talk abstract={talk.abstract} title={talk.title} />
      </li>
    {:else}
      <p>La liste des talks n'est pas disponible.</p>
    {/each}
  </ul>
  