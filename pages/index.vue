<template lang="html">
  <div>
    <Header />
    <main>
      <SideBar
        class="h-full text-white bg-gray-700 hidden sm:hidden md:block lg:block rounded main-side"
      />
      <div class="content">
        <events></events>
        <Songs />
      </div>
    </main>
  </div>
</template>

<script>
import Events from "../components/home/Events";
import SideBar from "~/components/sidebar/SideBar";
import HomeMain from "../components/home/HomeMain";
import Header from "../components/Header";
import Songs from "~/components/song/Songs";

export default {
  components: {
    Events,
    SideBar,
    HomeMain,
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
  position: sticky;
  top: 4rem;
}

.content {
  width: 50.6em;
}
</style>
