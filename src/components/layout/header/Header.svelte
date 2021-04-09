<script>
  import SocialNetworks from "./SocialNetworks.svelte";
  import Stats from "./Stats.svelte";
</script>

<header>
  <div class="background parallax__layer parallax__layer--deep" />
  <SocialNetworks class="networks" />
  <p class="around-the-world top">&lt;around the world&gt;</p>
  <img class="drawing-laurent" src="images/drawing-laurent.png" alt="" />
  <img class="drawing-carl" src="images/drawing-carl.webp" alt="" />
  <img class="logo-znk" src="logos/logo-zenika.png" alt="Logo Zenika" />
  <img class="logo-tz" src="logos/technozaure.svg" alt="Logo Technozaure" />
  <p class="date">23/04/2021</p>

  <Stats />

  <p class="event-description">
    Le principe est simple, sur une même journée, toutes les agences Zenika
    animeront une TechnoZaure World Wide. Qui dit internationale, dit timezones
    différentes. L’objectif sera de commencer la journée très tôt par Singapour,
    puis d’enchainer avec la France en biseau avec Singapour, pour enfin finir
    par Montréal là aussi en biseau avec la France. Cela signifie que pour les
    plus fous d'entre nous, il sera possible de faire un marathon de TZ de très
    tôt le matin à très tard dans la nuit
  </p>
  <p class="around-the-world bottom">&lt;around the world&gt;</p>
</header>

<style>
  :global(#sapper) {
    perspective: 300px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  header {
    position: relative;
    transform-style: preserve-3d;
  }

  .parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 200ms ease-in-out;
  }

  .parallax__layer--deep {
    transform: translateZ(-300px) scale(2.01);
  }

  .background {
    background: center url("/images/billy-huynh-W8KTS-mhFUE-unsplash.webp");
    background-blend-mode: screen;
    background-position-y: -223px;
  }

  header {
    min-height: 100vh;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date {
    font-weight: bold;
    letter-spacing: 3.67px;
    font-size: 2.5rem;
    margin: 0;
  }

  header :global(.networks) {
    display: none;
  }
  
  .drawing-laurent,
  .drawing-carl {
    position: absolute;
    transform: translateZ(-100px) scale(1.33);
  }

  .drawing-laurent {
    left: -50px;
    top: -30px;
    width: 30%;
  }

  .drawing-carl {
    top: -60px;
    right: -100px;
    width: 70%;
  }

  .logo-znk {
    width: 40%;
    max-width: 345px;
  }

  .logo-tz {
    margin-top: 2rem;
    width: 70%;
    max-width: 470px;
  }

  .logo-tz + .date {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .event-description {
    width: 90%;
    max-width: 1200px;
    font-weight: 600;
    line-height: 1.4em;
    font-size: 1rem;
    margin: 1.5em 1em;
    order: 1;
  }

  .around-the-world {
    color: var(--red-znk);
    margin: 0;
  }

  .around-the-world.top {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  .around-the-world.bottom {
    font-size: 1.25rem;
    margin-top: 1.5em;
  }

  @media only screen and (min-width: 768px) {
    header :global(.networks) {
      display: flex;
      position: fixed;
      right: 0;
      margin: 12px;
    }

    .drawing-laurent {
      left: 11%;
      top: 30px;
      width: 19%;
    }

    .drawing-carl {
      top: 10px;
      right: 4%;
      width: 45%;
    }

    .logo-tz {
      margin-top: 1.125rem;
    }

    .event-description {
      font-size: 1.625rem;
      order: 0;
    }

    .around-the-world.top {
      font-size: 1.875rem;
    }

    .around-the-world.bottom {
      font-size: 2.5rem;
      margin-top: 0;
      order: 0;
    }
  }
</style>
