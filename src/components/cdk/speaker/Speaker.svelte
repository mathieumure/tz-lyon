<style>
.speaker {
  display: flex;
  align-items: center;
  --img-size: 90px;
}

img {
  width: var(--img-size);
  height: var(--img-size);
  border-radius: 50%;
}

.speaker-tight {
  margin-right: calc(-1 * var(--img-size) / 3);
}

p {
  margin: 0 0 0.75rem 0.5rem;
  align-self: flex-end;
  font-size: 0.9rem;
  line-height: 1rem;
  opacity: 0.8;
}

.speaker-vertical {
  flex-direction: column;
}
.speaker-vertical p {
  margin: 0.25rem 0 0;
  align-self: center;
  text-align: center;
}

.speaker-tight p {
    font-size: 0.75rem;
  }

@media (max-width: 1280px) {
  .speaker-tight img {
    --img-size: 72px;
  }

  .speaker-tight p {
    font-size: 0.625rem;
  }
}

@media (max-width: 767px) {
  /* on phone screens, display vertically all speakers
  except when there is only one (both first and last child) */
  :global(.speaker:not(li:first-child:last-child .speaker)) {
    flex-direction: column;
  }
  :global(.speaker:not(li:first-child:last-child .speaker) p) {
    margin: 0.25rem 0 0;
    align-self: center;
    text-align: center;
  }
}
</style>

<script>
export let speaker, displayVertical, displayTight;

const [firstName, lastName] = speaker.displayName.split(" ");
const displayNameShort = `${firstName} ${lastName[0]}`;

const defaultImage = "/images/speakers/blob-violet.png";
</script>

<div
  class="speaker"
  class:speaker-vertical={displayVertical}
  class:speaker-tight={displayTight}>
  <img
    src={speaker.photoURL}
    onerror={`this.src = "${defaultImage}"`}
    alt={`Photo de ${speaker.displayName}`}
    loading="lazy" />
  <p>{displayTight ? displayNameShort : speaker.displayName}</p>
</div>
