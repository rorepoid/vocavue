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
    },
    methods: {
        agregarFruta() {
            this.frutas.push({nombre: this.nuevaFruta.nombre, cantidad: this.nuevaFruta.cantidad});
            this.nuevaFruta = {nombre: null, cantidad: 0};
        },
    },
    computed: {
        total() {
            return this.frutas.reduce((contador, array) => contador + array.cantidad, 0)
        }
    }

})