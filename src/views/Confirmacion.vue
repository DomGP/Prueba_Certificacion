<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4 text-center">
                        <h1>CONFIRMACIÓN</h1>
                        </div>
                        <v-list-item-subtitle class="text-center">La orden <b>N°{{numeroRandom()}}</b> ha sido confirmada y ya la estamos preparando</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-card-actions class="d-flex justify-center align-end">
                    <v-btn
                        class="btn"
                        outlined
                        rounded
                        dark
                        color="primary"
                        @click="$router.push('/')"
                    >
                        Ir a Inicio
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'confirmacion-views',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        numeroRandom(){
            return Math.floor(Math.random() * 1000)
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
    .btn{
        margin: 0 auto;
    }
</style>