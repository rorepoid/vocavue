<template>
    <div :class="[{'bg-gray-800': darkTheme}, 'h-full', 'w-full']">
        <div class="flex flex-row w-full h-screen justify-center">
            <div class="container bg-gray-600 flex flex-row">
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
                    <button class="w-full h-12">Inicio</button>
                    <button class="w-full h-12">Novedades</button>
                    <button class="w-full h-12">Favoritos</button>
                    <button class="w-full h-12">Suscripciones</button>
                    <button class="w-full h-12">Artistas</button>
                </div>
                <div class="flex flex-wrap justify-center w-full pb-1 overflow-y-scroll ">
                    <div class="sticky top-0 w-full h-16 flex flex-col">
                        <div id="searcher" class="flex bg-gray-800 h-16 rounded-lg rounded-t-none p-4">
                            <input type="text" name="search" id="search" placeholder="Search" class="w-3/4 rounded-full">
                        </div>
                        <button @click="darkTheme = !darkTheme" :class="['absolute', 'right-0', 'text-white']">Dark Theme
                        </button>
                    </div>
                    <Nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: 'VocaDB',
            darkTheme: true,
        }
    },
}
</script>