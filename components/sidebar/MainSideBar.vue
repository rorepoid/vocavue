<template>
  <div>
    <div v-for="(option, index) of options" :key="index">
      <side-bar-button :option="option"></side-bar-button>
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
          text: "Inicio",
          link: "#Inicio",
        },
        {
          text: "Novedades",
          link: "#Novedades",
        },
        {
          text: "Favoritos",
          link: "#Favoritos",
        },
        {
          text: "Suscripciones",
          link: "#Suscripciones",
        },
        {
          text: "Artistas",
          link: "#Artistas",
        },
      ],
    };
  },
};
</script>
