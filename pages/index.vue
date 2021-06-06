<template lang="html">
    <HomeMain class="pt-16">
        <MainSideBar class="w-64 h-full text-white bg-gray-700 rounded hidden sm:hidden md:block lg:block fixed" />
        <div class="flex-1 pl-0 md:pl-64">
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