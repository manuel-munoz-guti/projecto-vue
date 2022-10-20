<template>
    <div>
        <div class="d-flex justify-content-center p-2">
            <h2 class="p-3">Buscando universo: {{ $route.params.name }}</h2> 
        </div>
        <div class="d-flex flex-column">
            <div :key="universo" v-for="universo in universos" className="row mt-5">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeIn"> 
                    <img :src="universo.logo" 
                        :alt="universo.nombre"
                        className="img-thumbnail"
                    />
                </div>
                <div className="d-flex flex-column col-md-6 gy-2">
                    <h3> {{ universo.nombre }} </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Historia:</b> {{ universo.historia }} </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BuscarUniverso',
    data(){
        return {
            universos: [],
            nameUniverso: this.$route.params.name
        }
    },
    methods: {
        getUniversoByName() {
            axios({
                method: "get",
                url: "http://localhost:3333/universos?nombre_like="+ this.nameUniverso
            })
            .then( response => {
                this.universos = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        },
    },
    computed: {
    },
    mounted(){
        this.getUniversoByName();
    },
    components: {
    }
}
</script>
  