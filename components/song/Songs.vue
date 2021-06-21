<template>
  <section class="songs">
    <h2 class="songs-title">Top songs of all time</h2>
    <div class="songs-collection">
      <VocaImage v-for="song in songs" :key="song.id" :song="song" />
    </div>
  </section>
</template>

<script>
const axios = require("axios");
import VocaImage from "~/components/song/Vocaimage";

export default {
  data() {
    return {
      songs: {},
    };
  },

  mounted() {
    this.getSongs();
  },

  methods: {
    getSongs() {
      axios
        .get("https://vocadb.net/api/songs/top-rated?maxResults=50&fields=PVs")
        .then((response) => (this.songs = response.data));
    },
  },

  components: {
    VocaImage,
  },
};
</script>

<style scoped>
.songs-collection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1em;
}

.songs-title {
  color: #ffffff;
  padding: 1em 0;
}
</style>
