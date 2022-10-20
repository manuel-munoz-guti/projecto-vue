<template>
    <div>
        <div className="row mt-5 p-4">
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
</template>
  
<script>
export default {
    name: 'VerUniverso',
    data(){
        return {
            universo: {}
        }
    },
    methods: {
        getUniversoById() {
            axios({
                method: "get",
                url: "http://localhost:3333/universos/"+this.$route.params.id 
            })
            .then( response => {
                this.universo = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        }
    },
    computed: {

    },
    mounted(){
        this.getUniversoById();
    },
    components: {
    }
}
</script>
  