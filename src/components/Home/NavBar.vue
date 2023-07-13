<template>
    <div>
        <v-app-bar
        color="primary"
        dense
        dark
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Babka Page</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-badge 
        :content="cartCount" 
        :value="cartCount>0">
            <v-icon 
            @click="$router.push('/cart')"
            >
            mdi-cart</v-icon>
        </v-badge>

        </v-app-bar>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="primary"
            >
            <v-list-item v-for="route in routes" :key="route.name" @click="redirigirA(route.name)">
                <v-list-item-icon>
                <v-icon>{{route.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{route.title}}</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'navBar-comp',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
            routes:[
                {
                    icon:'mdi-home',
                    title:'Inicio',
                    name:'Home'
                },
                {
                    icon:'mdi-cart',
                    title:'Carrito',
                    name:'Cart'
                },
            ]
        }
    },
    computed: {
        vitaActualName(){
            return this.$route.name
        }
    },
    methods: {
        redirigirA(nameRoute){
            if(this.vitaActualName == nameRoute) return

            this.$router.push({name:nameRoute})
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