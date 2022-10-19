<template>
    <div>
        <header class="d-flex p-2 flex-column">
            <div class="d-flex justify-content-center">
                <h4>Universos de Heroes</h4> 
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary" @click="irCrear()"> + Nuevo </button>
            </div>
            <hr>
        </header>
        <main>
            <section>
                <div v-for="(value, key, index) of universos" :key="index" class="card mb-3 align-items-center">
                    <div class="d-flex p-2 w-50">
                        <img :src="value.logo" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" v-text="value.nombre"></h5>
                        <p class="card-text" v-text="value.historia"></p>
                        <div class="btn-group" role="group">
                            <button type="button" @click="irA('ver', value.id)" class="btn btn-primary">Ver</button>
                            <button type="button" @click="irA('editar', value.id)" class="btn btn-secondary">Editar</button>
                            <button type="button" @click="borrarUniverso(value.id)" class="btn btn-danger">Eliminar</button>
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
        agregarUniverso() {
            axios({
                method: "post",
                url: "http://localhost:3333/universos",
                data: this.universo
            })
            .then( response => {
                console.log(response);
            })
            .catch( error => console.log(error));
        },
        borrarUniverso(id) {
            axios({
                method: "delete",
                url: "http://localhost:3333/universos/"+id
            })
            .then( response => {
                console.log(response);
            })
            .catch( error => console.log(error));
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
  