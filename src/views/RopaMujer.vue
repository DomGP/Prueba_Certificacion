<template>
    <v-container>
        <h1 class="text-center">Ropa de Mujer</h1>
                <v-divider></v-divider>
        <v-row>
            <v-col>
                <card-cart/>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col v-for="ropa in ropaMujer" :key="ropa.title">
                <card-ropaMujer :ropa="ropa"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CardRopaMujer from '@/components/RopaMujer/CardRopaMujer.vue'
import { mapActions, mapState } from 'vuex'
import CardCartRopaMujer from '@/components/RopaMujer/CardCartRopaMujer.vue'
export default {
    name: 'electronica-views',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['ropaMujer'])
    },
    methods: {
        ...mapActions(['fetchRopaMujer'])
    },
    // watch: {},
    components: {
        'card-ropaMujer':CardRopaMujer,
        'card-cart':CardCartRopaMujer
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchRopaMujer()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>