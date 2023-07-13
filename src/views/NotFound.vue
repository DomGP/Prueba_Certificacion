<template>
    <div class="body">
        <v-btn
        class="btn"
        color="secondary"
        dark
        @click="$router.push('/')">Volver a Inicio</v-btn>
    </div>
</template>

<script>
export default {
    name: 'NotFound-views',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .body{
        /* background: #f0f4f7; */
        background: black;
        background-image: url('@/assets/notfoundmario.jpeg') ;
        /* background-image: url('@/assets/pac_man.gif') ; */
        /* background-image: url('@/assets/notfoundstarwars.jpeg') ; */
        /* background-image: url('@/assets/whalenotfound.jpeg') ; */
        /* background-image: url('@/assets/whalenf.jpeg'); */ 
        background-position-x: center;
        background-position-y: 30%;
        background-repeat: no-repeat;
        height: 100%;
        position: relative;
    }
    .btn{
        position: absolute;
        top:70%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>