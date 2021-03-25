<script>
    export let tags;
    import Tag from './tag/Tag.svelte'
  </script>
  
  <style>
    ul {
      list-style: none;
      display: flex;
      padding: 0;
    }
  
    @media (max-width: 600px) {
      ul {
        justify-content: center;
      }
    }
  </style>
  
  <ul>
    {#each tags as tag}
      <li>
        <Tag {tag}/>
      </li>
    {/each}
  </ul>
  