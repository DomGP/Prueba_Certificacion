<template>
    <v-container>
        <h1 class="text-center">Ropa de Hombre</h1>
                <v-divider></v-divider>
        <v-row>
            <v-col>
                <card-cart/>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col v-for="ropa in ropaHombre" :key="ropa.title">
                <card-ropaHombre :ropa="ropa"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CardRopaHombre from '@/components/RopaHombre/CardRopaHombre.vue'
import { mapActions, mapState } from 'vuex'
import CardCartRopaHombre from '@/components/RopaHombre/CardCartRopaHombre.vue'
export default {
    name: 'electronica-views',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['ropaHombre'])
    },
    methods: {
        ...mapActions(['fetchRopaHombre'])
    },
    // watch: {},
    components: {
        'card-ropaHombre':CardRopaHombre,
        'card-cart':CardCartRopaHombre
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchRopaHombre()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>