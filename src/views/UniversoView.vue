<template>
    <div>
        <header class="d-flex p-2 flex-column">
            <div class="d-flex justify-content-center">
                <h2 class="p-3">Universos de Heroes</h2> 
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary" @click="irCrear()"> + Nuevo </button>
            </div>
            <hr>
        </header>
        <main>
            <section>
                <div v-for="(value, key, index) of universos" :key="index" class="mb-3 align-items-center animate__animated animate__backInUp">
                    <div class="card col">
                        <div className="row no-gutters">
                            <div class="d-flex justify-content-center align-items-center col-md-6">
                                <img :src="value.logo" class="card-img" alt="">
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title" v-text="value.nombre"></h5>
                                    <p class="card-text p-2" v-text="value.historia"></p>
                                    <div class="d-flex justify-content-end">
                                        <div class="btn-group" role="group">
                                            <button type="button" @click="irA('ver', value.id)" class="btn btn-primary">Ver</button>
                                            <button type="button" @click="irA('editar', value.id)" class="btn btn-secondary">Editar</button>
                                            <button type="button" @click="borrarUniverso(value.id)" class="btn btn-danger">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'UniversoView',
    data(){
        return {
            universos: [],
            universo: {
                id: new Date().getMilliseconds,
                nombre: null,
                logo: null,
                historia: null
            }
        }
    },
    methods: {
        successAlert() {
            this.$swal({
                icon: 'success',
                title: 'Exito',
                text: 'Se elimino el universo satisfactoriamente',
            });
        },
        errorAlert() {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        },
        getUniversos() {
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
        borrarUniverso(id) {
            axios({
                method: "delete",
                url: "http://localhost:3333/universos/"+id
            })
            .then( response => {
                console.log(response);
                this.successAlert();
            })
            .catch( error => {
                console.log(error)
                this.errorAlert();
            });
        },
        irA(opcion, universo_id){
            if(opcion === 'editar'){
                this.$router.push({ name: 'editarUniverso', params:{ id: universo_id }});
            } else if(opcion === 'ver') {
                this.$router.push({ name: 'verUniverso', params:{ id: universo_id }});
            } 
        },
        irCrear(){
            this.$router.push({ name: 'crearUniverso' });
        }
    },
    computed: {
    },
    mounted(){
        this.getUniversos();
    },
    components: {
    }
}
</script>
  