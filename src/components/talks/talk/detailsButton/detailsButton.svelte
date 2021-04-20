<style>
button {
  background: none;
  border: 1px solid var(--z-red);
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  padding: 0 8px;
  position: relative;
}

button:focus {
  border: 1px solid #ffffff;
  outline: none;
}

button:before {
  content: "";
  background: transparent
    linear-gradient(
      51deg,
      var(--z-red) 0%,
      var(--z-red) 30%,
      var(--z-blue) 100%
    );
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

button:hover:before {
  opacity: 1;
}

button:hover .arrow {
  opacity: 0;
}

button:hover .arrow-white {
  opacity: 1;
}

.arrow {
  opacity: 1;
  display: flex;
}

.arrow-white {
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.arrow,
.arrow-white {
  transition: opacity 200ms ease-in-out;
}
</style>

<script>
import Arrow from "./arrow.svelte";
</script>

<button on:click aria-label="Détails">
  <span class="arrow">
    <Arrow />
  </span>
  <span class="arrow-white">
    <Arrow color="#ffffff" />
  </span>
</button>
