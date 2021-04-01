<template>
    <div class="w-1/4 h-full text-white bg-gray-700 rounded hidden sm:hidden md:block lg:block">
        <div class="sticky top-0 bottom-auto w-full pb-1">
            <div id="header" class="flex bg-gray-800 h-16 rounded-lg rounded-t-none">
                <a class="w-16  flex flex-row" href="#">
                    <img class="relative rounded" src="~/assets/aimaina.png" alt="aimaina">
                    <div class="rounded-lg">
                        <p class="font-sans text-xl text-blue-300 text-left w-32">
                            VocaDB Client
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <div v-for="(option, index) of options" :key="index">
            <side-bar-button :option="option"></side-bar-button>
        </div>
    </div>
</template>

<script>
import SideBarButton from './SideBarButton.vue'

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
            ]
        }
    }
}
</script>
