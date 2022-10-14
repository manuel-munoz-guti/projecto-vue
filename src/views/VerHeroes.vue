<template>
    <div>
      <h4>Ver Heroe</h4>
      Heroe id :{{ $route.params.id }}
    </div>
</template>
  
<script>
export default {
    name: 'VerHeroes',
    data(){
        return {
            mensaje: 'Ver Heroe'
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
  