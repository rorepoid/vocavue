<template>
    <div id="app">
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
                    </div>
                </div>
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
            titulo: 'VocaDB',
            frutas: [
                {nombre: 'Pera', cantidad: 10},
                {nombre: 'Manzana', cantidad: 0},
                {nombre: 'Plátano', cantidad: 11},
            ],
            nuevaFruta: {nombre: null, cantidad: 0},
            total: 0,
            darkTheme: true,
        }
    },
    methods: {
        agregarFruta() {
            this.frutas.push({nombre: this.nuevaFruta.nombre, cantidad: this.nuevaFruta.cantidad});
            this.nuevaFruta = {nombre: null, cantidad: 0};
        },
        removerFruta(index) {
            this.frutas.splice(index, 1);
        }
    },
    computed: {
        sumarFrutas() {
            this.total = this.frutas.reduce((contador, array) => contador + array.cantidad, 0)
            return this.total
        },
    },
    mounted () {
    axios.get('https://vocadb.net/api/songs/top-rated?maxResults=50&fields=PVs')
        .then(response => this.songs = response.data)
    },

    components: {
        VocaImage,
    }
}
</script>