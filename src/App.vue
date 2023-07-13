<template>
  <v-app>
    <nav-comp/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-comp/>
  </v-app>
</template>

<script>
import NavBar from '@/components/Home/NavBar.vue'
import Footer from '@/components/Home/Footer.vue'
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
