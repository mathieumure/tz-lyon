<style>
.speaker {
  display: flex;
  align-items: center;
}

p {
  margin: 0 1rem 1rem 0.5rem;
  align-self: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  opacity: 0.8;
}

.speaker-vertical {
  flex-direction: column;
}
.speaker-vertical p {
  margin: 0.25rem 0 0;
  align-self: center;
}

</style>

<script>
import ImgRounded from "../img/ImgRounded.svelte";

export let speaker, displayVertical, displayTight;

const [firstName, lastName] = speaker.displayName.split(" ");
const displayNameShort = `${firstName} ${lastName[0]}`

const imageSize = 90;
let style = `margin-top: -${imageSize / 2}px`
if (displayTight) {
  style += `; margin-right: -${imageSize / 3}px`;
}
</script>

<div
  class="speaker"
  class:speaker-vertical={displayVertical}
  {style}>
  <ImgRounded
    size={imageSize}
    src={speaker.photoURL}
    alt={`Photo de ${speaker.displayName}`} />
  <p>{displayTight ? displayNameShort : speaker.displayName}</p>
</div>
