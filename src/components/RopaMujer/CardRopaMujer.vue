<template>
    <v-card class="mx-auto my-12" max-width="450" height="800" elevation="10">
        <v-img height="250" :src="ropa.image"></v-img>

        <v-card-title class="title">{{ ropa.title }}</v-card-title>

        <v-card-text>
        <v-row align="center" class="mx-0">
            <v-rating
            :value="ropa.rating.rate"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ropa.rating.rate}} ({{ropa.rating.count}})</div>
        </v-row>

        <div class="my-4 text-subtitle-1"></div>

        <div class="desc">
            {{ropa.description}}
        </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

      

        <v-card-text>
        <v-chip-group
            active-class="primary accent-4 white--text"
            column
        >
            <p>Valor</p>
            <v-chip>$ {{ropa.price}}</v-chip>
        </v-chip-group>
        </v-card-text>

        <v-card-actions class="d-flex justify-center align-end">
        <v-btn class="add" color="primary" dark @click="addProd" elevation="10">
            <v-icon>mdi-cart</v-icon>
            Agregar Producto
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "cardRopaMujer-comp",
  props: {
    ropa:{
        type:Object,
        required:true
    }
  },
  data: function () {
    return {
      selection: 1,
    };
  },
  computed: {
    ...mapState(['ropaMujer']),
  },
  methods: {
    ...mapActions(['agregarProductoACart']),
    addProd() {
      let prod={
                id:this.ropa.id,
                title:this.ropa.title,
                price:this.ropa.price,
                count:1,
            }
            this.agregarProductoACart(prod)
        },
    },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.add {
  margin: 0 auto;
}
.desc{
  height: 270px;
}
.title{
  height: 120px;
}
</style>