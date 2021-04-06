<script>
  import Stats from "./Stats.svelte";
</script>

<header>
  <p class="date">23/04/2021</p>
  <p class="subtitle">Sharing the world</p>
  <img class="person-1" src="images/person1.png" alt="Personne 1" />
  <img class="person-2" src="images/person2.webp" alt="Personne 2" />
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
  <p class="around-the-world">&lt;around the world&gt;</p>
</header>

<style>
  header {
    font-family: "Nunito";
    min-height: 100vh;
    background: center url("/images/billy-huynh-W8KTS-mhFUE-unsplash.webp");
    background-blend-mode: screen;
    background-position-y: -223px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date {
    font-weight: bold;
    font-size: 2.5rem;
    margin: 0;
  }

  .subtitle {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.25rem;
    margin: 0;
  }

  .person-1,
  .person-2 {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .person-1 {
      display: block;
      position: absolute;
      left: 17%;
      top: 9%;
      width: 19%;
    }

    .person-2 {
      display: block;
      position: absolute;
      top: 2%;
      right: 9%;
      width: 45%;
    }
  }

  .logo-znk {
    width: 50%;
    max-width: 345px;
  }

  .logo-tz {
    margin-top: 2rem;
    width: 70%;
    max-width: 450px;
  }

  .logo-tz + .date {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .event-description {
    width: 90%;
    max-width: 1200px;
    font-weight: 600;
    line-height: 2.25rem;
    font-size: 1.625rem;
    margin: 1rem;
  }

  .around-the-world {
    color: var(--red-znk);
    font-size: 2.5rem;
    margin: 0;
  }
</style>
