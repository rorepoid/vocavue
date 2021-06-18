<template lang="html">
  <div class="container">
    <Header />
    <main>
      <SideBar
        class="h-full text-white bg-gray-700 hidden sm:hidden md:block lg:block rounded main-side"
      />
      <div class="content">
        <div>
          <events></events>
          <div class="song-list">
            <voca-image
              v-for="song of songs"
              :key="song.id"
              :song="song"
            ></voca-image>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const axios = require("axios");
import VocaImage from "../components/home/Vocaimage";
import Events from "../components/home/Events";
import SideBar from "~/components/sidebar/SideBar";
import HomeMain from "../components/home/HomeMain";
import Header from "../components/Header";

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
    Events,
    SideBar,
    HomeMain,
    Header,
  },
};
</script>

<style scoped>
main {
  display: flex;
  background-color: #4a5568;
}

.main-side {
  width: 16em;
  position: sticky;
  top: 4rem;
}

.content {
  width: 50.6em;
}

.song-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1em;
}
</style>
