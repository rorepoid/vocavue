
vocaImage = Vue.component("voca-image", {
    props: {
        src: null
    },
    template: `
        <div class="flex-grow w-64 max-w-sm md:w-1/2 lg:w-1/3 h-auto rounded-lg text-white text-center">
            <div class="mx-0 sm:mx-1 md:mx-4">
                <div class="bg-gray-600 rounded-lg h-56">
                    <img class="rounded-lg w-full h-full"
                         src="https://nicovideo.cdn.nimg.jp/thumbnails/36060272/36060272.17133200.L" 
                         data-reactid="37">
                </div>
                <div class="text-left h-16">
                    <p class="">Nico Nico Douga</p>
                    <sub>asas</sub>
                </div>
            </div>
        </div>
    `,
    data() {
        return {info: null};
    },
    mounted () {
        axios.get('https://vocadb.net/api/songs/top-rated?maxResults=50&fields=PVs')
            .then(response => (this.info = response.data))
    }
})


const app = new Vue({
    el: '#app',
    data: {
        titulo: 'VocaDB',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Plátano', cantidad: 11},
        ],
        nuevaFruta: {nombre: null, cantidad: 0},
        total: 0,
        darkTheme: true,
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
    components: {
        vocaImage: vocaImage
    }

})





async function getData() {
    var url = 'https://vocadb.net/api/songs/top-rated?maxResults=50&fields=PVs';
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        console.log(json);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

// getData();


// console.log('asas');