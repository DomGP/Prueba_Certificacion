<template>
    <div>
        <template>
            <v-container class="px-0" fluid>
              <v-radio-group v-model="radioGroup">
                <v-radio v-for="item in items" :key="item" :label="item" :value="item"></v-radio>
              </v-radio-group>
            </v-container>
          </template>
        <v-btn
      color="primary"
      class="mr-4"
      @click="$router.push('/confirmacion')"
    >
      Confirmar
    </v-btn>
    </div>

    
</template>

<script>
export default {
    name: 'formPago-comp',
    // props: {},
    data: function(){
        return {
            items: [
            'Transferencia Bancaria',
            'Servipag',
            'Contra Entrega',
            'Webpay',
        ],
    }
    },
    // computed: {},
    methods: {
        validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
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