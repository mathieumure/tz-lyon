<script>
    import ImgRounded from "../cdk/img/ImgRounded.svelte";
  
    export let photo, firstname, lastname, twitter;
  </script>
  
  <style>
    .wrapper_speaker {
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    p {
      text-align: center;
      margin: 1rem 0 0.5rem 0;
    }
  
    .twitter {
      display: flex;
    }
  
    .twitter-img {
      width: 20px;
      margin: 0 0.5em;
    }
  
    a {
      color: var(--ssd-blue);
    }
  </style>
  
  <div class="wrapper_speaker">
    <ImgRounded src={photo} alt={`Photo de ${firstname} ${lastname}`} />
    <p>{firstname} {lastname}</p>
    {#if twitter}
      <div class="twitter">
        <img alt="Logo twitter" class="twitter-img" src="/images/twitter.svg" />
        <a href={`https://twitter.com/${twitter}`} rel="noopener" target="_blank">
          <b>@{twitter}</b>
        </a>
      </div>
    {/if}
  </div>
  