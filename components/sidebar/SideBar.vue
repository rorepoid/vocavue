<template>
  <div>
    <div class="sidebar">
      <div v-for="(option, index) of options" :key="index">
        <side-bar-button :option="option"></side-bar-button>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarButton from "./SideBarButton.vue";

export default {
  components: { SideBarButton },
  data() {
    return {
      options: [
        {
          text: "Home",
          link: "#Home",
        },
        {
          text: "News",
          link: "#News",
        },
        {
          text: "Favorites",
          link: "#Favorites",
        },
        {
          text: "Subscriptions",
          link: "#Subscriptions",
        },
        {
          text: "Artists",
          link: "#Artists",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 80px;
}
</style>
