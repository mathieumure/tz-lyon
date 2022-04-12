<style>
:global(#sapper) {
  perspective: 300px;
  overflow-x: hidden;
  overflow-y: auto;
}

@media (prefers-reduced-motion: reduce) {
  :global(#sapper) {
    overflow: revert;
  }
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

.logo-znk {
  width: 250px;
  height: 243px;
}

.logo-tz {
  margin-top: 2rem;
  width: 300px;
  height: 50px;
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

header :global(.networks) {
  display: flex;
  position: fixed;
  right: 0;
  margin: 12px;
  flex-direction: column;
  align-items: baseline;
}

@media only screen and (min-width: 768px) {
  header :global(.networks) {
    display: flex;
    position: fixed;
    right: 0;
    margin: 12px;
    flex-direction: row;
  }

  .logo-znk {
    width: 345px;
    height: 336px;
  }

  .logo-tz {
    margin-top: 1.125rem;
    width: 470px;
    height: 78px;
  }

  .event-description {
    font-size: 1.625rem;
  }
}
</style>

<script>
import SocialNetworks from "./SocialNetworks.svelte";
import Stats from "./Stats.svelte";
import { eventStore } from "../../../stores";

const { description } = eventStore;
</script>

<header>
  <div class="background parallax__layer parallax__layer--deep" />
  <SocialNetworks class="networks" />

  <img class="logo-znk" src="logos/logo-zenika.svg" alt="Zenika" />
  <img class="logo-tz" src="logos/technozaure.svg" alt="Technozaure" />
  {#if $description.date}
    <p class="date">
      {new Date($description.date).toLocaleDateString(undefined, {
        dateStyle: "short",
      })}
    </p>
  {/if}

  <Stats />

  <p class="event-description">
    Bienvenue sur notre page <strong>{$description.name}</strong> !<br /> Une
    TechnoZaure <em>- TZ -</em> c’est quoi ? Une journée de conférences,
    d’ateliers et d’échanges organisée par et dédiée à tous les
    collaborateurs.trices d’une agence Zenika.<br />Découvrez le programme !
  </p>
</header>
