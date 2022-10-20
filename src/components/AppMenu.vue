<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ titulo }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/universos">Universos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/heroes">Heroes</router-link>
                </li>
            </ul>
            <div v-if=" this.$router.currentRoute.value.name === 'heroes' || this.$router.currentRoute.value.name === 'universos' " class="d-flex" >
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="buscado">
                <button class="btn btn-outline-success" @click="irA()">Buscar</button>
            </div>
            </div>
        </div>
    </nav>  
</template>
  
<script>
export default {
    name: 'AppMenu',
    data(){
        return {
            buscado: ''
        }
    },
    props: [
        "titulo"
    ],
    methods: {
        irA(){
            console.log('ruta... ', this.$router.currentRoute.value);
            if( this.$router.currentRoute.value.name === 'heroes' || this.$router.currentRoute.value.name === 'buscarHeroe'){
                this.$router.push({ name: 'buscarHeroe', params:{ name: this.buscado }});  
                this.buscado='';           
            } else if( this.$router.currentRoute.value.name === 'universos' || this.$router.currentRoute.value.name === 'buscarUniverso') {
                this.$router.push({ name: 'buscarUniverso', params:{ name: this.buscado }});
                this.buscado='';
            }    
        }
    },
    computed: {

    },
    mounted(){
        
    },
    components: {
    }
}
</script>