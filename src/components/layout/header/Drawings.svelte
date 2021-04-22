<img class="drawing-catherine" src="images/catherine-caron-sketching.png" alt="" />
<img class="drawing-laurent" src="images/laurent-delvaux-sketching.png" alt="" />
<img class="drawing-carl" src="images/carl-azoury-sketching.png" alt="" />
<img class="drawing-loic" src="images/loic-bertholet-sketching.png" alt="" />

<style>
  img {
    position: absolute;
    transform: translateZ(-100px) scale(1.33);
    width: 45%;
    top: -5%;
  }

  .drawing-catherine,
  .drawing-loic {
    display: none
  }

  .drawing-laurent {
    left: -20%;
  }

  .drawing-carl {
    right: -20%;
  }

  @media only screen and (min-width: 1024px) {
    img {
      width: 28%;
      top: 5%;
    }

    .drawing-laurent {
      left: 5%;
    }

    .drawing-carl {
      right: 5%;
    }
    
    .drawing-catherine {
      display: block;
      left: -13%;
    }

    .drawing-loic {
      display: block;
      right: -15%;
    }
  }
</style>
