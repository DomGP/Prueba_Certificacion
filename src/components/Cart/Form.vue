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
      v-model="remail"
      :rules="rEmailRules"
      label="Repetir E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="telefono"
      :rules="telefonoRules"
      label="Telefono"
      required
      type="number"
    ></v-text-field>
    <v-divider class="mt-4"></v-divider>
    <h3 class="text-left">Datos del Despacho</h3>
    <v-text-field
      v-model="direccion"
      :counter="10"
      :rules="direccionRules"
      label="Dirección"
      required
    ></v-text-field>

    <v-text-field
      v-model="comuna"
      :counter="10"
      :rules="comunaRules"
      label="Comuna"
      required
    ></v-text-field>

    <v-divider class="mt-4"></v-divider>
    <h3 class="text-left">Datos del Despacho</h3>
    <v-radio-group v-model="radioGroup"
    :rules="selectPago"
    required>
    <v-radio v-for="item in items" :key="item" :label="item" :value="item"></v-radio>
    </v-radio-group>
        <v-btn
      color="primary"
      class="mr-4"
      @click="validate"
    >
      Confirmar
    </v-btn>
    
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
              v => !!v || 'Nombre es requerido',
              v => (v && v.length <= 40) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
              v => !!v || 'E-mail es requerido',
              v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
            ],
            remail: '',
            rEmailRules: [
              v => !!v || 'La confirmación del E-mail es requerido',
              v => v === this.email || 'La confirmación del E-mail no coincide',
            ],
            telefono:'',
            telefonoRules:[
              v => !!v || 'Teléfono es requerido',
              v => /^\d{9}$/.test(v) || 'El número debe ser válido'
            ],
            direccion:'',
            direccionRules:[
              v => !!v || 'Dirección es requerida',
            ],
            comuna:'',
            comunaRules:[
              v => !!v || 'Comuna es requerida',
            ],
            selectPago:[
              v => !!v || 'Debe seleccionar un medio de pago'
            ],
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
          if(this.$refs.form.validate()){
            this.$router.push('/confirmacion')
          }
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