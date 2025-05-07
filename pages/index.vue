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
  /* width: 50.6em; */
  display: grid;
  grid-template-areas: "events", "songs";
  grid-template-rows: 200px;
}

@media (min-width: 50rem) {
  .main-side {
    display: block;
    width: 16em;
    height: 100%;
    position: sticky;
    top: 5rem;
    color: #ffffff;
  }

  .app-layout {
    padding: 0 10%;
  }
}
</style>
