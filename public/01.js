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
    },
    methods: {
        agregarFruta() {
            this.frutas.push({nombre: this.nuevaFruta.nombre, cantidad: parseInt(this.nuevaFruta.cantidad)});
            this.nuevaFruta = {nombre: null, cantidad: 0};
            this.total = this.frutas.reduce((contador, array) => contador + array.cantidad, 0);
        },
    }

})