<template>
    <div>
      <h4>Heroes y Villanos</h4>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        <div v-for="(value, key, index) of heroes" :key="index" className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img :src="value.url" alt="value.id" className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title" v-text="value.superhero"></h5>
                            <p className="card-text" v-text="value.alter_ego"></p>
                            <p>{{ value.characters }}</p>
                            <p className="card-text">
                                <small className='text-muted'> {{ value.first_appearance }} </small>
                            </p>
                            <div class="btn-group" role="group">
                                <button type="button" @click="irA('ver', value.id)" class="btn btn-primary">Ver</button>
                                <button type="button" @click="irA('editar', value.id)" class="btn btn-secondary">Editar</button>
                                <button type="button" @click="irA('eliminar', value.id)" class="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HeroeView',
    data(){
        return {
            heroes: [],
            heroeUno: {
                id: new Date().getMilliseconds,  
                superhero: null, 
                publisher: null, 
                alter_ego: null,
                first_appearance: null,
                characters: null
            }
        }
    },
    methods: {
        getHeroes() {
            axios({
                method: "get",
                url: "http://localhost:3333/heroes"
            })
            .then( response => {
                this.heroes = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        },
        agregarHeroe() {
            axios({
                method: "post",
                url: "http://localhost:3333/heroes",
                data: this.heroe
            })
            .then( response => {
                console.log(response);
            })
            .catch( error => console.log(error));
        },
        irA(opcion, heroe_id){
            if(opcion === 'editar'){
                this.$router.push({ name: 'editarHeroe', params:{ id: heroe_id }});
            } else if(opcion === 'ver') {
                this.$router.push({ name: 'verHeroe', params:{ id: heroe_id }});
            }
        }
    },
    computed: {

    },
    mounted(){
        this.getHeroes();   
    },
    components: {
    }
}
</script>