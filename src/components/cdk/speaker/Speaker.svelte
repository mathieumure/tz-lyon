<style>
.wrapper_speaker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  margin: .25rem 0 0;
  font-size: .75rem;
  line-height: 1rem;
  opacity: .8;
}
</style>

<script>
import ImgRounded from "../img/ImgRounded.svelte";
import { eventStore } from "../../../stores";

export let id;

const { speakers } = eventStore;
$: speaker = $speakers.find((s) => s.uid === id);

const imageSize = 90;
</script>

<div class="wrapper_speaker" style={`margin-top: -${imageSize/2}px`}>
  <ImgRounded
    size={imageSize}
    src={speaker.photoURL}
    alt={`Photo de ${speaker.displayName}`} />
  <p>{speaker.displayName}</p>
</div>
