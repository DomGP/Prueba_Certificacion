<template>
    <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
        v-for="mejorproducto in mejoresproductos"
        :key="mejorproducto.title"
        height="200px"
        width="500px"
        class="mx-auto"
        >
        <img :src="mejorproducto.image" height="400" alt="">
        <v-row
            class="fill-height"
            align="start"
            justify="center"
            width="300px"

            >
            <div class="text-h4 mt-4">
                {{mejorproducto.title}}
            </div>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'carrusel-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['mejoresproductos'])
    },
    //methods: {}
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
