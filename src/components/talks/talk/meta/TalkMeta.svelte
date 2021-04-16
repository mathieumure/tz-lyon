<style>
.talk-meta {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
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

.talk-duration__value,
.talk-duration__label {
  color: var(--z-red);
}

.talk-duration__value {
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: bold;
  margin-left: 0.25rem;
}

.talk-duration__label {
  margin-left: 0.125rem;
}
</style>

<script>
import TalkLang from "./TalkLang.svelte";

export let language, format;

const formatContainsFrenchFlag = /\uD83C\uDDEB\uD83C\uDDF7/.test(format); // regexp for 🇫🇷
const lang = language === "French" || formatContainsFrenchFlag ? "fr" : "en";

const formatShort = format.includes("Workshop") ? "workshop" : "talk";

const [_, hour, minutes] = /(\d{1})?h?(\d{2})\s?[min]?/.exec(format);
</script>

<section class="talk-meta">
  <div class="talk-time">
    <img src="/pictos/clock.svg" alt="" />
    {#if hour > 0}
      <span class="talk-duration__value">{hour}</span>
      <span class="talk-duration__label">h</span>
    {/if}
    {#if minutes > 0}
      <span class="talk-duration__value">{minutes}</span>
      <span class="talk-duration__label">min</span>
    {/if}
  </div>
  <TalkLang
    {lang}
    title="{formatShort} donné en {lang === 'fr' ? 'Français' : 'Anglais'}" />
</section>
