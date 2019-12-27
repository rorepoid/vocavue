
const app = new Vue({
    el: '#app',
    data: {
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
        .then(response => (this.songs = response.data))
    },
})

async function getData() {
    var url = 'https://vocadb.net/api/songs/top-rated?maxResults=50&fields=PVs';
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        console.log(json[0].pvs[0].thumbUrl);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

getData();