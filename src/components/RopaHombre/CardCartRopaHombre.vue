<template>
    <v-data-table
                :headers="headers"
                :items="cartProducts"
                sort-by="title"
                class="elevation-1"
            >
                <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>
                        Total Carrito <span class="success--text">${{Number(cartTotal).toLocaleString("es-CL")}}</span>
                    </v-toolbar-title
                >
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-btn @click="$router.push('/cart')">Ir a Pagar</v-btn>
                <v-spacer></v-spacer>

                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5"
                        >¿Quieres borrar el producto?</v-card-title
                        >
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                        >Confirmar</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancelar</v-btn
                        >
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-toolbar>
                </template>
                <template v-slot:[`item.image`]="{ item }">
                    <img :src="item.image" width="75" alt="">
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small class="mr-2" @click="addStock(item)">
                    mdi-plus-circle
                </v-icon>
                <v-icon small class="mr-2" @click="removeStock(item)">
                    mdi-minus-circle
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
                </template>
            </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'cartRopaHombre-view',
    // props: {},
    data: function(){
        return {
            dialogDelete: false,
        headers: [
            {text: "Imagen",value: "image",
            },
            { text: "Producto", value: "title" },
            { text: "Cantidad", value: "count" },
            { text: "Precio", value: "price" },
            { text: "Subtotal", value: "total" },
            { text: "Acciones", value: "actions", sortable: false },
        ],
            deleteId:null
        }
    },
    computed: {
        ...mapGetters(['cartTotal','cartProducts'])
    },
    methods: {
        ...mapActions(['quitarProductoCart','agregarStockCart','quitarStockCart']),
        deleteItem(item) {
            console.log(item)
            this.deleteId = item.id
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.quitarProductoCart(this.deleteId)
            this.closeDelete();
        },

        closeDelete() {
            this.dialogDelete = false;
        },
        addStock(item){
            this.agregarStockCart(item.id)
        },
        removeStock(item){
            this.quitarStockCart(item.id)

        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>