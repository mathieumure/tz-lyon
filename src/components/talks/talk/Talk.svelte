<script>
    import Speaker from "../../speaker/Speaker.svelte";
    import Tags from "../../cdk/tags/Tags.svelte"
  
    export let speakers, title, description, tags;
  </script>
  
  <style>
    .wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
    }
  
    .talk-title {
      color: var(--ssd-orange);
    }
  
    @media (max-width: 600px) {
      .wrapper {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
  
      .speaker {
        margin: 1rem 0;
      }
    }
  </style>
  
  <div class="wrapper">
    <div class="speaker">
      {#each speakers as speaker}
        <Speaker {...speaker} />
      {/each}
    </div>
    <div>
      <h3 class="talk-title">
        <b>{title}</b>
      </h3>
      <p class="talk-desc">{description}</p>
      <Tags {tags} />
    </div>
  </div>
  