<template lang="html">
  <div>
    <Header />
    <main>
      <SideBar class="main-side" />
      <div class="content">
        <Events />
        <Songs />
      </div>
    </main>
  </div>
</template>

<script>
import Events from "../components/home/Events";
import SideBar from "~/components/sidebar/SideBar";
import Header from "../components/Header";
import Songs from "~/components/song/Songs";

export default {
  components: {
    Events,
    SideBar,
    Header,
    Songs,
  },
};
</script>

<style scoped>
main {
  display: flex;
  background-color: #4a5568;
  justify-content: center;
}

.main-side {
  width: 16em;
  height: 100%;
  position: sticky;
  top: 5rem;
  color: #ffffff;
}

.content {
  width: 50.6em;
}
</style>
