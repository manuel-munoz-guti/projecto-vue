<template>
    <div>
        <h4>Buscar Universo: {{ $route.params.name }}...</h4>
        <div class="d-flex flex-column">
            <div :key="universo" v-for="universo in universos" className="row mt-5">
                <div className="col-4"> 
                    <img :src="universo.logo" 
                        :alt="universo.nombre"
                        className="img-thumbnail"
                    />
                </div>
                <div className="col-8">
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
  