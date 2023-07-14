<template>
    <v-container>
        <v-row>
            <v-col
            v-for="tipoproducto in tiposproductos"
            :key="tipoproducto.name">
                <v-card
                    class="mx-auto"
                    max-width="400"
                    height="550"
                    elevation="10"
                >
                    <v-img
                    class="white--text align-end"
                    height="300px"
                    :src="tipoproducto.image"
                    >
                    </v-img>
                    <v-card-title class="text-center" color="primary">{{tipoproducto.name}}</v-card-title>
                    <v-card-text class="text--primary mx-0">
                    <div>{{tipoproducto.text}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="primary"
                        dark
                        @click="redirectTo(tipoproducto.name)"
                    >
                        Ver Productos
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'card-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['tiposproductos']),
    },
    methods: {
        redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
    },
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