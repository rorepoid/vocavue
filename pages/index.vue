<template lang="html">
    <div class="w-auto bg-gray-700 flex-1 border-blue-900 rounded-lg h-full top-auto w-full container">
        <div class="h-64 bg-black m-3 rounded-lg text-white text-center">
            Eventos
        </div>
        <div class="flex flex-wrap items-stretch  mx-auto bg-gray-700 justify-center">
            <div class="flex-grow w-64 max-w-sm md:w-1/2 lg:w-1/3 h-auto rounded-lg text-white text-center" v-for="song of songs">
                <voca-image :song="song"></voca-image>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
import VocaImage from "~/components/VocaImage";

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
    }
}
</script>