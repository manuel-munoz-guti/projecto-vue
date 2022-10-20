<template>
    <div>
      <header class="d-flex p-2 flex-column">
          <div class="d-flex justify-content-center">
            <h2 class="p-3">Heroes y Villanos</h2>
          </div>
          <div class="d-flex flex-row justify-content-between">
              <select class="form-select w-25" v-model="universoFiltro" @change.prevent="filtrarHeroe()">
                <option :key="universo.id" v-for="universo in universos">{{ universo.nombre }}</option>
              </select>
              <button class="btn btn-primary" @click="irCrear()"> + Nuevo </button>
          </div>
          <hr>
      </header>
      
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        <div v-for="(value, key, index) of heroes" :key="index" className="col animate__animated animate__backInUp">
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
                                <button type="button" @click="borrarHeroe(value.id)" class="btn btn-danger">Eliminar</button>
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
            universos: [],
            universoFiltro: ''
        }
    },
    methods: {
        successAlert() {
            this.$swal({
                icon: 'success',
                title: 'Exito',
                text: 'Se elimino el heroe satisfactoriamente',
            });
        },
        errorAlert() {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        },
        getUniversosSelect() {
            axios({
                method: "get",
                url: "http://localhost:3333/universos"
            })
            .then( response => {
                this.universos = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        },
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
        borrarHeroe(id) {
            axios({
                method: "delete",
                url: "http://localhost:3333/heroes/"+id
            })
            .then( response => {
                this.heroes = this.heroes.filter( heroe =>  heroe.id !== id );
                successAlert();
            })
            .catch( error => {
                errorAlert();
                console.log(error)
            });
        },
        irA(opcion, heroe_id){
            if(opcion === 'editar'){
                this.$router.push({ name: 'editarHeroe', params:{ id: heroe_id }});
            } else if(opcion === 'ver') {
                this.$router.push({ name: 'verHeroe', params:{ id: heroe_id }});
            }
        },
        irCrear(){
            this.$router.push({ name: 'crearHeroe' });
        },
        filtrarHeroe() {
            axios({
                method: "get",
                url: "http://localhost:3333/heroes?publisher="+ this.universoFiltro
            })
            .then( response => {
                this.heroes = response.data;
            })
            .catch( error => {
                console.log(error);
            });
        }
    },
    computed: {

    },
    mounted(){
        this.getHeroes();
        this.getUniversosSelect();
    },
    components: {
    }
}
</script>