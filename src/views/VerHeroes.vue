<template>
    <div>
        <div className="row mt-5">
            <div className="col-4"> 
                <img :src="heroe.url" 
                    :alt="heroe.superhero"
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3> {{ heroe.superhero }} </h3>
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
    name: 'VerHeroes',
    data(){
        return {
            heroe: {}
        }
    },
    methods: {
        getHeroeById() {
            axios({
                method: "get",
                url: "http://localhost:3333/heroes/"+this.$route.params.id 
            })
            .then( response => {
                this.heroe = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        }
    },
    computed: {

    },
    mounted(){
        this.getHeroeById();
    },
    components: {
    }
}
</script>
  