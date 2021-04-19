<style>
.talk-lang {
  width: 1.5rem;
  height: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  background-clip: content-box;
  box-sizing: border-box;
  font-size: 0.625rem;
  line-height: 0.625rem;
}

.talk-lang-fr {
  background-color: var(--z-blue);
  border-color: var(--z-red-dark);
}

.talk-lang-en {
  background-color: var(--z-red-dark);
  border-color: var(--z-blue);
}
</style>

<script>
export let lang, title;
</script>

<span class="talk-lang talk-lang-{lang}" {title}>
  {lang}
</span>
