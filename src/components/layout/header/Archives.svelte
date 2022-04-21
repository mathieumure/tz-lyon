<style>
  .archives-nav {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem 2rem 0;
      text-align: left;
  }

  .archives-nav-links {
      display: none;
      position: absolute;
  }

  .archives-nav:hover .archives-nav-links {
      display: block;
  }
</style>

<script>
  const archives = [
    { name: 'Novembre 2021', path: '/archives/2021-11' }
  ];
</script>

<nav class="archives-nav">
  <p>Archives ▼</p>
  <ul class="archives-nav-links">
    {#each archives as archive}
      <li>
        <a href={archive.path} sapper:prefetch>{archive.name}</a>
      </li>
    {/each}
  </ul>
</nav>
