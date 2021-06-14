<template>
  <div
    :class="[
      { 'bg-gray-800': darkTheme },
      'h-full',
      'w-full',
      'flex',
      'flex-row',
      'justify-center',
    ]"
  >
    <div class="container bg-gray-600">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import SideBar from "~/components/sidebar/SideBar";

export default {
  data() {
    return {
      titulo: "VocaDB",
      darkTheme: true,
    };
  },
  components: {
    SideBar,
  },
};
</script>
