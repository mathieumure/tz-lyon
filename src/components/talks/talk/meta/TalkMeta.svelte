<style>
.talk-meta {
  display: flex;
  align-items: center;
    column-gap: 1rem;
}

:global(.text-xl) {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: bold;
    margin-left: 0.25rem;
}

:global(.talk-duration) {
    position: absolute;
    top: 0;
    right: 0;
}

</style>

<script>
import TalkLang from "./TalkLang.svelte";
import ClockTag from "../../../cdk/tags/tag/ClockTag.svelte";
import MainTag from "../../../cdk/tags/tag/MainTag.svelte";

export let language, format, room;

const formatContainsFrenchFlag = /\uD83C\uDDEB\uD83C\uDDF7/.test(format); // regexp for 🇫🇷
const lang = language === "French" || formatContainsFrenchFlag ? "fr" : "en";

const formatShort = format.includes("Workshop") ? "workshop" : "talk";

const [_, hour, minutes] = /(\d{1})?h?(\d{2})\s?[min]?/.exec(format);
</script>

<section class="talk-meta">
  <MainTag class="text-xl">
    { room }
  </MainTag>
  <TalkLang
    {lang}
    title="{formatShort} donné en {lang === 'fr' ? 'Français' : 'Anglais'}" />
  <ClockTag class="talk-duration" {hour} {minutes} />
</section>
