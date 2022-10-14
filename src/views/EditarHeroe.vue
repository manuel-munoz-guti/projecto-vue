<template>
    <div>
      <h4>Heroes y Villanos</h4>
      Editar Heroe: {{ $route.params.id }}
    </div>
</template>
  
<script>
export default {
    name: 'EditarHeroe',
    data(){
        return {
            mensaje: 'heroes y villanos'
        }
    },
    methods: {

    },
    computed: {

    },
    mounted(){
        
    },
    components: {
    }
}
</script>