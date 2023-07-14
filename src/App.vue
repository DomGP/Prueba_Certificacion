<template >
  <v-app>
    <nav-comp/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-comp/>
  </v-app>
</template>

<script>
import NavBar from '@/components/App/NavBar.vue'
import Footer from '@/components/App/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    'nav-comp':NavBar,
    'footer-comp':Footer
  }
};
</script>

<style >
.app{
  color:primary;
}
</style>
