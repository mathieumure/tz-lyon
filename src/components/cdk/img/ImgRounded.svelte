<script>
    export let alt, src;
  
    const defaultImage = "/images/speakers/blob-violet.png";
  </script>
  
  <style>
    img {
      margin: 0 0.75rem;
      width: 128px;
      border-radius: 50%;
    }
  
    @media (max-width: 600px) {
      img {
        width: 100px;
      }
    }
  </style>
  
  <img {alt} src={src || defaultImage} />
  