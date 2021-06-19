<template>
  <article class="mx-0 rounded-lg text-white text-center song-card">
    <a :href="href" target="_blank">
      <img
        class="rounded-lg w-full"
        :src="src || require(`~/assets/aimaina.png`)"
        data-reactid="37"
      />
    </a>
    <div class="text-left h-16">
      <h1 class="">{{ song.name }}</h1>
      <p>{{ author }}</p>
    </div>
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
};
</script>

<style scoped>
img {
  aspect-ratio: 12/9;
  object-fit: contain;
}
</style>
