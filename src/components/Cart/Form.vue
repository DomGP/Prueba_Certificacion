<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <div></div>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

     <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Repetir E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="telefono"
      :rules="telefonoRules"
      label="Telefono"
      required
    ></v-text-field>

  </v-form>
</template>

<script>
export default {
    name: 'form-comp',
    // props: {},
    data: function(){
        return {
            valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
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