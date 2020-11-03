<template>
    <div :class="[{'bg-gray-800': darkTheme}, 'h-full', 'w-full']">
        <div class="flex flex-row w-full h-screen justify-center">
            <div class="container bg-gray-600 flex flex-row">
                <MainSideBar />
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
import MainSideBar from "~/components/sidebar/MainSideBar";

export default {
    data() {
        return {
            titulo: 'VocaDB',
            darkTheme: true,
        }
    },
    components: {
        MainSideBar,
    },
}
</script>