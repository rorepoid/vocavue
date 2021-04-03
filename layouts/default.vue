<template>
    <div :class="[{'bg-gray-800': darkTheme}, 'h-full', 'w-full', 'flex', 'flex-row', 'justify-center']">
        <div class="container bg-gray-600 flex flex-row">
            <div class="w-full h-16 flex top-0 bg-gray-800 border-blue-900 container fixed">
                <div class="sticky top-0 bottom-auto w-64 pb-1">
                    <div id="header" class="flex h-16 rounded-t-none">
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
                <div class="sticky top-0 w-full h-16 flex flex-col">
                    <search-box class="justify-center"/>
                    <button @click="darkTheme = !darkTheme" :class="['absolute', 'right-0', 'text-white']">
                        Dark Theme
                    </button>
                </div>
            </div>
            <Nuxt />
        </div>
    </div>
</template>

<script>
import MainSideBar from "~/components/sidebar/MainSideBar";
import SearchBox from '../components/navbar/SearchBox';

export default {
    data() {
        return {
            titulo: 'VocaDB',
            darkTheme: true,
        }
    },
    components: {
        MainSideBar,
        SearchBox,
    },
}
</script>