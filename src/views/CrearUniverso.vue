<template>
    <div>
        <form @submit.prevent="guardarUniverso()">
            <div class="form-group row mt-5 p-4">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeIn"> 
                    <img :src="universo.logo" 
                        :alt="universo.nombre"
                        className="img-thumbnail"
                    />
                    <label for="universeImg">Suba Imagen</label>
                    <input type="file" class="form-control-file" id="universeImg" accept="image/png, image/jpeg, image/jpg, image/webp" @change="uploadImageToClaudinary($event)">
                </div>
                <div className="d-flex flex-column col-md-6 gy-2">
                    <ul className="list-group list-group-flush">
                        <div class="d-flex flex-column align-items-start p-2">
                            <label for="universeName" style="font-weight:bold">Nombre del Universo</label>
                            <input type="text" class="form-control" id="universeName" placeholder="Nombre del Universo" v-model="universo.nombre">
                        </div>
                        <div class="d-flex flex-column align-items-start p-2">
                            <label for="universeName" style="font-weight:bold">Historia del Universo</label>
                            <textarea type="text" class="form-control" id="universeHistoria" placeholder="Historia del Universo" rows="10" v-model="universo.historia"></textarea>
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
    name: 'CrearUniverso',
    data(){
        return {
            universo: {
                id: new Date().getMilliseconds(),
                nombre: null,
                logo: "https://res.cloudinary.com/manuel-munoz-guti/image/upload/v1666231032/heroes/subir-imagen_ko4lax.png",
                historia: null
            }
        }
    },
    methods: {
        successAlert() {
            this.$swal({
                icon: 'success',
                title: 'Exito',
                text: 'Se creo el universo satisfactoriamente',
            });
        },
        errorAlert() {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        },
        guardarUniverso() {
            axios({
                method: "post",
                url: "http://localhost:3333/universos/" ,
                data: this.universo
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
                this.universo.logo = url;
            })
            .catch( error => console.log(error));
        }
    },
    computed: {

    },
    mounted(){
    },
    components: {
    }
}
</script>
  