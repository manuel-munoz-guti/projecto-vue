<template>
    <div>
        <h4>Universo id :{{ $route.params.id }}</h4>
        <div className="row mt-5">
        <div className="col-4"> 
            <img :src="universo.logo" 
                :alt="universo.nombre"
                className="img-thumbnail"
            />
        </div>
        <div className="col-8">
            <h3> test </h3>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> test </li>
            <li className="list-group-item"> <b>Publisher:</b> test </li>
            <li className="list-group-item"> <b>First Appearance:</b> test </li>
            </ul>
            <h5 className="mt-3"> Characters </h5>
            <p> test </p>

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
  