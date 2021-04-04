<style>
.wrapper_speaker {
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  text-align: center;
  margin: 0 0.5rem;
  color: white;
}
</style>

<script>
import ImgRounded from "../img/ImgRounded.svelte";
import { eventStore } from "../../../stores";

export let id;

const { speakers } = eventStore;
$: speaker = $speakers.find((s) => s.uid === id);
</script>

<div class="wrapper_speaker">
  <ImgRounded
    size="80"
    src={speaker.photoURL}
    alt={`Photo de ${speaker.displayName}`} />
  <p>{speaker.displayName}</p>
</div>
