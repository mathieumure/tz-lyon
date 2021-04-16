<style>
:global(#sapper) {
  perspective: 300px;
  overflow-x: hidden;
  overflow-y: auto;
}

header {
  position: relative;
  transform-style: preserve-3d;
  background: linear-gradient(transparent 80%, black 100%);
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
  background: center url("/images/background-stars.jpg");
  background-size: cover;
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
}

.around-the-world {
  color: var(--z-red);
  font-size: 0.75rem;
  margin: 0.5rem 0 0;
}

@media only screen and (min-width: 768px) {
  header :global(.networks) {
    display: flex;
    position: fixed;
    right: 0;
    margin: 12px;
  }

  .logo-tz {
    margin-top: 1.125rem;
  }

  .event-description {
    font-size: 1.625rem;
  }

  .around-the-world {
    font-size: 1.875rem;
  }
}
</style>

<script>
import SocialNetworks from "./SocialNetworks.svelte";
import Drawings from "./Drawings.svelte";
import Stats from "./Stats.svelte";
</script>

<header>
  <div class="background parallax__layer parallax__layer--deep" />
  <SocialNetworks class="networks" />
  <p class="around-the-world">&lt;around the world&gt;</p>

  <Drawings />

  <img class="logo-znk" src="logos/logo-zenika.png" alt="Logo Zenika" />
  <img class="logo-tz" src="logos/technozaure.svg" alt="Logo Technozaure" />
  <p class="date">23/04/2021</p>

  <Stats />

  <p class="event-description">
    Welcome to our WorldWide TechnoZaure ! Une technoZaure c’est quoi ? Une
    journée de conférences, d’ateliers et d’échanges organisée par et dédiée à
    tous les collaborateurs.trices d’une agence Zenika. Pour nos 15 ans, nous
    avons décidé de voir les choses en grand et d’organiser sur une même journée
    une TechnoZaure internationale qui rassemble toutes nos agences, sur 3
    timezones différentes. Découvrez le programme de notre marathon !
  </p>
</header>
