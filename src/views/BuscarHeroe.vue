<template>
    <div>
        <h4>Buscar Heroe: {{ $route.params.name }}...</h4>
        <div class="d-flex flex-column">
            <div :key="heroe" v-for="heroe in heroes" className="row mt-5">
                <div className="col-4"> 
                    <img :src="heroe.url" 
                        :alt="heroe.superhero"
                        className="img-thumbnail"
                    />
                </div>
                <div className="col-8">
                    <h3> {{ heroe.superhero }} </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Alter ego:</b> {{ heroe.alter_ego }}</li>
                        <li className="list-group-item"> <b>Publisher:</b> {{ heroe.publisher }} </li>
                        <li className="list-group-item"> <b>First Appearance:</b> {{ heroe.first_appearance }} </li>
                    </ul>
                    <h5 className="mt-3"> {{ heroe.characters }} </h5>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BuscarHeroe',
    data(){
        return {
            heroes: [],
            nameHeroe: this.$route.params.name
        }
    },
    methods: {
        getHeroeByName() {
            axios({
                method: "get",
                url: "http://localhost:3333/heroes?superhero_like="+ this.nameHeroe
            })
            .then( response => {
                this.heroes = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        },
    },
    computed: {
    },
    mounted(){
        this.getHeroeByName();
    },
    components: {
    }
}
</script>
  