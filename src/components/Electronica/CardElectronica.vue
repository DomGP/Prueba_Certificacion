<template>
    <v-card class="mx-auto my-12" max-width="374" height="800" elevation="10">
        <v-img height="250" :src="electro.image"></v-img>

        <v-card-title class="title">{{ electro.title }}</v-card-title>

        <v-card-text>
        <v-row align="center" class="mx-0">
            <v-rating
            :value="electro.rating.rate"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{electro.rating.rate}} ({{electro.rating.count}})</div>
        </v-row>

        <div class="my-4 text-subtitle-1"></div>

        <div class="desc">
            {{electro.description}}
        </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

      

        <v-card-text>
        <v-chip-group
            active-class="primary accent-4 white--text"
            column
        >
            <p>Valor</p>
            <v-chip>$ {{electro.price}}</v-chip>
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
  name: "cardElectronica-comp",
  props: {
    electro:{
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
    ...mapState(['electronica']),
  },
  methods: {
    ...mapActions(['agregarProductoACart']),
    addProd() {
      let prod={
                id:this.electro.id,
                title:this.electro.title,
                price:this.electro.price,
                image:this.electro.image,
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
  height: 240px;
}
.title{
  height: 140px;
}
</style>