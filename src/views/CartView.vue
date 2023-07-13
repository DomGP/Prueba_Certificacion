<template>
    <v-container>
        <v-row class="text-center">
            <v-col>
                <h1>Carrito</h1>
                <table-comp/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Table from '@/components/Cart/Table.vue'
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
        'table-comp':Table
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>