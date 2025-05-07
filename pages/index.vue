<template lang="html">
  <div class="app-layout">
    <Header class="header" />
    <SideBar class="main-side" />
    <main class="content">
      <Events />
      <Songs />
    </main>
  </div>
</template>

<script>
import Events from "~/components/home/Events";
import SideBar from "~/components/sidebar/SideBar";
import Header from "~/components/Header";
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
.app-layout {
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-template-columns: auto;
  grid-template-rows: 80px auto;
  background-color: var(--color-first);
}

main {
  display: flex;
  justify-content: center;
}

.main-side {
  display: none;
}

.content {
  display: grid;
  grid-template-areas: "events", "songs";
  grid-template-columns: 1fr;
  grid-template-rows: 15rem auto;
}

@media (min-width: 50rem) {
  .main-side {
    display: block;
    width: 100%;
    height: 100%;
  }

  .app-layout {
    padding: 0 10%;
    grid-template-areas:
      "header header"
      "sidebar main";
    grid-template-columns: 300px 1fr;
  }

  .content {
    grid-template-rows: 16rem;
  }
}
</style>
