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
}

.talk-time > img {
    margin-right: .25rem;
}

.talk-duration__value,
.talk-duration__label {
  color: var(--red-znk);
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

.talk-language {
  margin-left: 1rem;
}
</style>

<script>
export let language, format;

const formatContainsFrenchFlag = /\uD83C\uDDEB\uD83C\uDDF7/.test(format); // regexp for 🇫🇷
const lang = language === "French" || formatContainsFrenchFlag ? "fr" : "en";

const formatShort = format.includes("Workshop") ? "workshop" : "talk";

const [_, hour, minutes] = /(\d{1})?h?(\d{2})\s?[min]?/.exec(format);
</script>

<div class="talk-meta">
  <div class="talk-time">
    <img src="/pictos/clock.svg" alt="Pictogramme horloge" />
    {#if hour > 0}
      <span class="talk-duration__value">{hour}</span>
      <span class="talk-duration__label">h</span>
    {/if}
    {#if minutes > 0}
      <span class="talk-duration__value">{minutes}</span>
      <span class="talk-duration__label">min</span>
    {/if}
  </div>
  <img
    class="talk-language"
    src="/pictos/lang-{lang}.svg"
    alt="Pictogramme langue {lang}"
    title="{formatShort} donné en {lang === 'fr' ? 'Français' : 'Anglais'}" />
</div>
