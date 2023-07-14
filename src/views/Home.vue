<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Tienda DeTodito</h1>
        <v-divider></v-divider>
        <br>
        <h2>Mejores Productos</h2>
        <carrusel-comp/>
        <br>
        <v-divider></v-divider>
        <br>
        <h2>Nuestros productos</h2>
        <cardHome-comp/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardHome from '@/components/Home/CardHome.vue'
import Carrusel from '@/components/Home/Carrusel.vue'
import { mapActions } from 'vuex'
export default {
  name: 'component-name',
  // props: {},
  data: function(){
    return {
    }
  },
  // computed: {},
  methods: {
    ...mapActions(['fetchHome']),
    
  },
  // watch: {},
  components: {
    'cardHome-comp':CardHome,
    'carrusel-comp':Carrusel
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
    this.fetchHome()
  }
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>
