<script>
    import ImgRounded from "../cdk/img/ImgRounded.svelte";
  
    export let photo, firstname, lastname, twitter;
  </script>
  
  <style>
    .wrapper_speaker {
      padding: .5rem 0;
      display: flex;
      align-items: center;
    }
  
    p {
      text-align: center;
      margin: 0 .5rem;
      color: white;
    }
  </style>
  
  <section class="wrapper_speaker">
    <ImgRounded src={photo} alt={`Photo de ${firstname} ${lastname}`} />
    <p>{firstname} {lastname}</p>
  </section>
  