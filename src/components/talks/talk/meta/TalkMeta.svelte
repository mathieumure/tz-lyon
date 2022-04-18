<style>
.talk-meta {
  display: flex;
  align-items: center;
}

.talk-time {
    border-radius: 2rem;
    display: inline-flex;
    align-items: center;
    background: white;
    padding: 0.375rem 0.75rem;
    margin-right: 1rem;
}

.talk-time > img {
    height: 15px;
    width: 15px;
    margin-right: 0.25rem;
}

</style>

<script>
import TalkLang from "./TalkLang.svelte";
import ClockTag from "../../../cdk/tags/tag/ClockTag.svelte";

export let language, format;

const formatContainsFrenchFlag = /\uD83C\uDDEB\uD83C\uDDF7/.test(format); // regexp for 🇫🇷
const lang = language === "French" || formatContainsFrenchFlag ? "fr" : "en";

const formatShort = format.includes("Workshop") ? "workshop" : "talk";

const [_, hour, minutes] = /(\d{1})?h?(\d{2})\s?[min]?/.exec(format);
</script>

<section class="talk-meta">
  <ClockTag class="talk-time" {hour} {minutes} />
  <TalkLang
    {lang}
    title="{formatShort} donné en {lang === 'fr' ? 'Français' : 'Anglais'}" />
</section>
