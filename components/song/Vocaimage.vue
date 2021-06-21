<template>
  <article class="song-card">
    <a :href="href" target="_blank">
      <img :src="src" @error="setAltImg" />
    </a>
    <h3>{{ song.name }}</h3>
    <p>{{ author }}</p>
  </article>
</template>

<script>
export default {
  props: ["song"],

  data() {
    return {
      href: {},
      src: {},
      author: {},
    };
  },

  mounted() {
    this.song.pvs.forEach((pv, index) => {
      if (pv.pvType == "Original") {
        this.href = pv.url;
        this.src = pv.thumbUrl;
        this.author = pv.author;
        return;
      }
    });
  },

  methods: {
    setAltImg: event => event.target.src = require("~/assets/aimaina.png"),
  },
};
</script>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 12/9;
  object-fit: contain;
  border-radius: 0.5rem;
}

.song-card {
  color: #ffffff;
}
</style>
