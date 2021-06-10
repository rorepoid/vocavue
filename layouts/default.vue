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
    <div class="container bg-gray-600 flex flex-row">
      <div
        class="w-full h-16 flex top-0 bg-gray-800 border-blue-900 container fixed"
      >
        <logo-box class="sticky top-0 bottom-auto w-64 pb-1" />
        <div class="sticky top-0 w-full h-16 flex flex-col">
          <search-box class="justify-center" />
          <button
            @click="darkTheme = !darkTheme"
            :class="['absolute', 'right-0', 'text-white']"
          >
            Dark Theme
          </button>
        </div>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import LogoBox from "../components/navbar/LogoBox";
import MainSideBar from "~/components/sidebar/MainSideBar";
import SearchBox from "../components/navbar/SearchBox";

export default {
  data() {
    return {
      titulo: "VocaDB",
      darkTheme: true,
    };
  },
  components: {
    MainSideBar,
    SearchBox,
    LogoBox,
  },
};
</script>
