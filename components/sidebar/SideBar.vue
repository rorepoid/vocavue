<template>
  <div>
    <ul class="sidebar__list">
      <li class="sidebar__element" v-for="(option, index) of options" :key="index">
        <a class="sidebar__link" :href="option.link">{{ option.text }}</a>
      </li>
    </ul>
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
.sidebar__list {
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
}

.sidebar__element {
  max-height: 3rem;
  text-align: center;
  text-overflow: ellipsis;
}

.sidebar__element:hover {
  background-color: #7aa8ad;
}

.sidebar__link {
  display: block;
  padding: 1em 1em;
  text-decoration: none;
  color: #ffffff;
}
</style>
