<template>
    <div>
        <form @submit.prevent="guardarHeroe()">
            <div class="form-group row mt-5 p-4">
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeIn"> 
                    <img :src="heroe.url" 
                        :alt="heroe.superhero"
                        className="img-thumbnail"
                    />
                    <label for="heroImg">Suba Imagen</label>
                    <input type="file" class="form-control-file" id="heroImg" accept="image/png, image/jpeg, image/jpg, image/webp" @change="uploadImageToClaudinary($event)">
                </div>
                <div className="d-flex flex-column col-md-8 gy-2">
                    <ul className="list-group list-group-flush">
                        <div class="form-group d-flex flex-column align-items-start p-2">
                            <label for="heroName" style="font-weight:bold">Nombre del Heroe</label>
                            <input type="text" class="form-control" id="heroName" placeholder="Nombre del heroe" v-model="heroe.superhero">
                        </div>
                        <div class="form-group d-flex flex-column align-items-start p-2">
                            <label for="heroPublisher" style="font-weight:bold">Ubiverso del Heroe</label>
                            <select class="form-control" id="heroPublisher" v-model="heroe.publisher">
                                <option :key="universo.id" v-for="universo in universos">{{ universo.nombre }}</option>
                            </select>
                        </div>
                        <div class="form-group d-flex flex-column align-items-start p-2">
                            <label for="heroAlterEgo" style="font-weight:bold">Alter Ego</label>
                            <input type="text" class="form-control" id="heroAlterEgo" placeholder="Alter Ego del heroe" v-model="heroe.alter_ego">
                        </div>
                        <div class="form-group d-flex flex-column align-items-start p-2">
                            <label for="heroFirstApparence" style="font-weight:bold">Primera Aparicion</label>
                            <input type="text" class="form-control" id="heroFirstApparence" placeholder="Primera aparicion del heroe" v-model="heroe.first_appearance">
                        </div>
                        <div class="form-group d-flex flex-column align-items-start p-2">
                            <label for="heroCharacter" style="font-weight:bold">Interptretes</label>
                            <input type="text" class="form-control" id="heroCharacter" placeholder="Interpretes del heroe" v-model="heroe.characters">
                        </div>
                    </ul>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'CrearHeroe',
    data(){
        return {
            heroe: {
                id: new Date().getMilliseconds(),
                url: "https://res.cloudinary.com/manuel-munoz-guti/image/upload/v1666231032/heroes/subir-imagen_ko4lax.png",
                superhero: null,
                publisher: null,
                alter_ego: null,
                first_appearance: null,
                characters: null
            },
            universos: [],
            universo: {
                id: null,
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
                text: 'Se creo el heroe satisfactoriamente',
            });
        },
        errorAlert() {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        },
        guardarHeroe() {
            axios({
                method: "post",
                url: "http://localhost:3333/heroes/" ,
                data: this.heroe
            })
            .then( response => {
                this.successAlert();
            })
            .catch( error => {
                console.log(error);
                this.errorAlert();
            });
        },
        uploadImageToClaudinary(event) {
            const urlCloudinary='https://api.cloudinary.com/v1_1/manuel-munoz-guti/image/upload';
            const preset='heroes-vue';
            const image = event.target.files[0];

            let formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', preset);

            axios({
                method: "post",
                url: urlCloudinary,
                data: formData
            })
            .then( ({ data }) => {
                const url = data.secure_url;
                this.heroe.url = url;
            })
            .catch( error => console.log(error));
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
  