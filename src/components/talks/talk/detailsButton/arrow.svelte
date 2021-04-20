<script>
export let color;
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <defs>
    <style>
      .a {
        mix-blend-mode: lighten;
        isolation: isolate;
      }

      .c {
        fill: none;
      }

      .d {
        fill: url(#a);
      }
    </style>
    <linearGradient id="a" y1="1.878" x2="1.621" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ee2238" />
      <stop offset="1" stop-color="#bf1d67" />
    </linearGradient>
  </defs>
  <g class="a">
    <g>
      <path class="c" d="M0,0H24V24H0Z"/>
      <path
        class="{color ? '' : 'd'}"
        fill={color}
        d="M1,8.592H12.17l-4.88,4.88a1.008,1.008,0,0,0,0,1.42,1,1,0,0,0,1.41,0L15.29,8.3a1,1,0,0,0,0-1.41L8.71.292A1,1,0,0,0,7.3,1.7l4.87,4.89H1a1,1,0,1,0,0,2Z"
        transform="translate(4 4.407)"
      />
    </g>
  </g>
</svg>
