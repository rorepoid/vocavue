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
    }

})













async function getData(){
var url = 'https://vocadb.net/api/songs/top-rated?maxResults=30';
let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
  console.log(json);
//   alert(response.status);
} else {
  alert("HTTP-Error: " + response.status);
}
}

getData();

// console.log('asas');