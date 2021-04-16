<style>
ul {
  display: flex;
}

li {
  margin-right: 16px;
}

li:last-child {
  margin-right: 0;
}

a {
  display: inline-block;
}

img {
  height: 1.5rem;
  width: 1.5rem;
}
</style>

<script>
const networks = [
  {
    name: "Twitter",
    icon: "twitter.svg",
    link: "https://twitter.com/ZenikaIT",
  },
  {
    name: "YouTube",
    icon: "youtube.svg",
    link: "https://www.youtube.com/user/ZenikaITTv",
  },
  {
    name: "Facebook",
    icon: "facebook.svg",
    link: "https://www.facebook.com/ZenikaIT/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin.svg",
    link: "https://www.linkedin.com/company/zenika/",
  },
  {
    name: "Instagram",
    icon: "instagram.svg",
    link: "https://www.instagram.com/zenika_it/",
  },
  {
    name: "Twitch",
    icon: "twitch.svg",
    link: "https://www.twitch.tv/zenikait",
  },
];
</script>

<ul class={$$props.class}>
  {#each networks as network}
    <li>
      <a href={network.link}>
        <img src="logos/networks/{network.icon}" alt="" />
      </a>
    </li>
  {/each}
</ul>
