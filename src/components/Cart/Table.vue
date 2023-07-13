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
    name: 'cart-view',
    // props: {},
    data: function(){
        return {
            dialogDelete: false,
        headers: [
            {text: "ID Producto",align: "start",sortable: false,value: "id",
            },
            { text: "Producto", value: "nombre" },
            { text: "Cantidad", value: "count" },
            { text: "Precio", value: "precio_promo" },
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
        ...mapActions(['removeCartProduct','addStockCartProduct','removeStockCartProduct']),
        deleteItem(item) {
            console.log(item)
            this.deleteId = item.id
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.removeCartProduct(this.deleteId)
            this.closeDelete();
        },

        closeDelete() {
            this.dialogDelete = false;
        },
        addStock(item){
            this.addStockCartProduct(item.id)
        },
        removeStock(item){
            this.removeStockCartProduct(item.id)

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