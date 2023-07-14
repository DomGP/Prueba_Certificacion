import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos:[],
    tiposproductos:[],
    electronica:[],
    ropaHombre:[],
    ropaMujer:[],
    cart:[],
  },
  getters: {
    cartProducts(state){
      return state.cart.map(prod=>{
        let myProd=prod
        myProd.total=prod.count*prod.price
        return myProd
      })
    },
    cartTotal(state,getters){
      return getters.cartProducts.reduce((total,prod)=>{
        return total+prod.total
      },0)
    },
    cartCount(state,getters){
      return getters.cartProducts.reduce((total,prod)=>{
        return total+prod.count
      },0)
    },
    
    descuentoTotal(state, getters) {
      let subtotal = Math.round(getters.cartTotal)
      let descuento = 0
      if (subtotal < 500) {
          descuento = Math.round(subtotal * 0.05)
          return descuento
      } else {
          descuento = Math.round(subtotal * 0.11)
          return descuento
      }
    },
    descuentoProductos(state, getters) {
      let subtotal = Math.round(getters.cartTotal)
      let descuento = ''
      if (subtotal < 500) {
          descuento = '5%'
          return descuento
      } else {
          descuento = '11%'
          return descuento
      }
    },

  },
  mutations: {
    FETCH_MEJORES_PRODUCTOS(state,mejoresproductos){
      state.mejoresproductos=mejoresproductos
    },
    FETCH_TIPOS_PRODUCTOS(state,tiposproductos){
      state.tiposproductos=tiposproductos
    },
    FETCH_ELECTRONICA(state,electronica){
      state.electronica=electronica
    },
    FETCH_ROPA_HOMBRE(state,ropaHombre){
      state.ropaHombre=ropaHombre
    },
    FETCH_ROPA_MUJER(state,ropaMujer){
      state.ropaMujer=ropaMujer
    },
    AGREGAR_PRODUCTOS_A_CART(state,producto){
      let exist=state.cart.some(p=>p.id==producto.id)
      if(!exist){
        state.cart.push(producto)
      }
      else{
        state.cart.forEach(p=>{
          if(p.id==producto.id){
            p.count+=1;
          }
        })
      }
    },
    QUITAR_PRODUCTO_CART(state,idProduct){
      let index=state.cart.findIndex(p=>p.id==idProduct)
      state.cart.splice(index,1)
    },
    AGREGAR_STOCK_CART(state,idProduct){
      state.cart.forEach(p=>{
        if(p.id==idProduct){
          p.count+=1
        }
      })
    },
    QUITAR_STOCK_CART(state,idProduct){
      state.cart.forEach(p=>{
        if(p.id==idProduct && p.count>1){
          p.count-=1
        }
      })
    },
    LIMPIAR_CARRITO(state){
      state.cart=[]
    }

  },
  actions: {
    async fetchHome({commit}){
      try{
        let resp = await fetch(`/json/home.json`)
        let json = await resp.json()
        console.log(json)
        let mejoresproductos = json.mejoresproductos
        let tiposproductos = json.tiposproductos
        commit('FETCH_MEJORES_PRODUCTOS',mejoresproductos)
        commit('FETCH_TIPOS_PRODUCTOS',tiposproductos)

      }
      catch(error){
        console.log(error)
      }
    },
    async fetchElectronica({commit}){
      try{
        let resp = await fetch(`/json/electronica.json`)
        let json = await resp.json()
        console.log(json)
        let electronica=json
        commit('FETCH_ELECTRONICA',electronica)

      }
      catch(error){
        console.log(error)
      }
    },
    async fetchRopaHombre({commit}){
      try{
        let resp = await fetch(`/json/ropaHombre.json`)
        let json = await resp.json()
        console.log(json)
        let ropaHombre=json
        commit('FETCH_ROPA_HOMBRE',ropaHombre)

      }
      catch(error){
        console.log(error)
      }
    },
    async fetchRopaMujer({commit}){
      try{
        let resp = await fetch(`/json/ropaMujer.json`)
        let json = await resp.json()
        console.log(json)
        let ropaMujer=json
        commit('FETCH_ROPA_MUJER',ropaMujer)

      }
      catch(error){
        console.log(error)
      }
    },
    agregarProductoACart({commit},producto){
      commit('AGREGAR_PRODUCTOS_A_CART',producto)
    },
    quitarProductoCart({commit},idProduct){
      commit('QUITAR_PRODUCTO_CART',idProduct)
    },
    agregarStockCart({commit},idProduct){
      commit('AGREGAR_STOCK_CART',idProduct)
    },
    quitarStockCart({commit},idProduct){
      commit('QUITAR_STOCK_CART',idProduct)
    },
    limpiarCarrito({commit}){
      commit('LIMPIAR_CARRITO')
    }

  },
  modules: {
  }
})
