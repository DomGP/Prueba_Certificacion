<template>
    <v-container>
        <h1 class="text-center">Electrónica</h1>
                <v-divider></v-divider>
        <v-row>
            <v-col>
                <card-cart/>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col v-for="electro in electronica" :key="electro.title">
                <card-electronica :electro="electro"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CardElectronica from '@/components/Electronica/CardElectronica.vue'
import { mapActions, mapState } from 'vuex'
import CardCartElectronica from '@/components/Electronica/CardCartElectronica.vue'
export default {
    name: 'electronica-views',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['electronica'])
    },
    methods: {
        ...mapActions(['fetchElectronica'])
    },
    // watch: {},
    components: {
        'card-electronica':CardElectronica,
        'card-cart':CardCartElectronica
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchElectronica()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>