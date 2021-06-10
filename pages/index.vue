<template lang="html">
    <HomeMain>
        <MainSideBar class="h-full text-white bg-gray-700 hidden sm:hidden md:block lg:block rounded main-side" />
        <div class="content">
            <div>
                <events></events>
                <div class="flex flex-wrap items-stretch  mx-auto bg-gray-700 justify-center">
                    <div class="flex-grow w-64 max-w-sm md:w-1/2 lg:w-1/3 h-auto rounded-lg text-white text-center" v-for="song of songs">
                        <voca-image :song="song"></voca-image>
                    </div>
                </div>
            </div>
        </div>
    </HomeMain>
</template>

<script>
const axios = require('axios');
import VocaImage from "../components/home/Vocaimage";
import Events from "../components/home/Events";
import MainSideBar from "~/components/sidebar/MainSideBar";
import HomeMain from "../components/home/HomeMain";

export default {
    data() {
        return {
            songs: {},
        }
    },

    mounted () {
        this.getSongs()
    },

    methods: {
        getSongs () {
            axios.get('https://vocadb.net/api/songs/top-rated?maxResults=50&fields=PVs')
                .then(response => this.songs = response.data);
        }
    },

    components: {
        VocaImage,
        Events,
        MainSideBar,
        HomeMain,
    }
}
</script>

<style scoped>
.main-side {
    width: 16em;
    position: sticky;
    top: 4rem;
}

.content {
    width: 50.6em;
}
</style>