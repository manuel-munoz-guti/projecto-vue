<template>
    <div>
      <h4>Universos</h4>
      Editar Universo: {{ $route.params.id }}
    </div>
</template>
  
<script>
export default {
    name: 'EditarUniverso',
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