<style>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--dark-grey);
  border-radius: var(--card-border-radius);
  color: white;
  padding: 0 1.125rem 1.125rem;
}

section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 2rem);
  height: auto;
  margin-top: .5rem;
}

h3.talk-title {
  color: white;
  font-size: 1.5rem;
  line-height: 1.75rem;
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
    <p class="text-xs">{abstract140}</p>
    <TalkTags categoryId={categories} {level} />
  </section>
</article>
