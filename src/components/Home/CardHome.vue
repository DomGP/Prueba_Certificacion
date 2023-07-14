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
                    <v-card-title class="text-center" color="primary">{{capitalizeFirstLetter(tipoproducto.name)}}</v-card-title>
                    <v-card-text class="text--primary mx-0">
                    <div>{{tipoproducto.text}}</div>
                    </v-card-text>

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
    capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
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