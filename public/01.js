const app = new Vue({
    el: '#app',
    data: {
        titulo: 'PIAPRO',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Plátano', cantidad: 11},
        ],
        nuevaFruta: {nombre: null, cantidad: null}
    },
    methods: {
        agregarFruta() {
            console.log(this.frutas[0].nombre);
            this.frutas.push({nombre: this.nuevaFruta.nombre, cantidad: this.nuevaFruta.cantidad});
        },
    }

})