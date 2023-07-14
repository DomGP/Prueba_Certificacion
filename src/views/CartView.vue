<template>
    <v-container>
        <v-row class="text-center">
            <v-col>
                <h1>Carrito</h1>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col>
                <h2>Bolsa de Compras</h2>
                <table-comp/>                
            </v-col>
             <v-col>
                <h2>Datos de Facturación</h2>
                <br>
                <h3 class="text-left">Datos Comprador</h3>
                <form-comp/>
               <!--  <h3 class="text-left">Datos del Despacho</h3>
                <formDes-comp/>
                <h3 class="text-left">Forma de Pago</h3>
                <formPago-comp/> -->

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Table from '@/components/Cart/Table.vue'
import Form from '@/components/Cart/Form.vue'
/* import FormDespacho from '@/components/Cart/FormDespacho.vue'
import FormPago from '@/components/Cart/FormPago.vue' */
export default {
    name: 'cart-view',
    // props: {},
    data: function(){
        return {

        }
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'table-comp':Table,
        'form-comp':Form,
        /* 'formDes-comp':FormDespacho,
        'formPago-comp':FormPago */
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>