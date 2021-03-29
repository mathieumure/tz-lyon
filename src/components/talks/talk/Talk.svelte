<style>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--z-grey);
  border-radius: var(--card-border-radius);
  color: white;
}

.wrapper > * + * {
  margin-top: 1rem;
}

header {
  position: relative;
  width: 100%;
  min-height: 150px;
  height: auto;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("/images/full-vert-billy.jpg");
  background-position: center;
  background-size: cover;
  border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
}

section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 2rem);
  height: auto;
  padding: 1rem;
}

h3.talk-title {
  color: white;
}

.abstract {
  font-size: var(--text-size-xs);
}

@media (max-width: 600px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>

<script>
import TalkTags from "./tags/TalkTags.svelte";
import TalkSpeakers from "./speakers/TalkSpeakers.svelte";

export let abstract, categories, formats, language, level, speakers, title;

// @todo add short abstract to json ?
$: abstract140 = `${abstract.slice(0, 140)}${
  abstract.length > 140 ? "..." : ""
}`;
</script>

<article class="wrapper">
  <header>
    <TalkSpeakers {speakers} />
  </header>
  <section>
    <h3 class="talk-title">{title}</h3>
    <p class="abstract">{abstract140}</p>
    <TalkTags categoryId={categories} formatId={formats} {language} {level} />
  </section>
</article>
