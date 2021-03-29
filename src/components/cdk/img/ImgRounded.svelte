<style>
img {
  border-radius: 50%;
}
</style>

<script>
export let alt,
  size = 50,
  src;

const defaultImage = "/images/speakers/blob-violet.png";
</script>

<img
  {alt}
  src={src || defaultImage}
  style={`height: ${size}px; width: ${size}px;`}
  loading="lazy" />
