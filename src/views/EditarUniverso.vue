<template>
    <div>
        <h4>Editar Universo</h4>
        <form @submit.prevent="guardarUniverso()">
            <div class="form-group row mt-5">
                <div className="col-4"> 
                    <img :src="universo.logo" 
                        :alt="universo.nombre"
                        className="img-thumbnail"
                    />
                    <label for="universeImg">Suba Imagen</label>
                    <input type="file" class="form-control-file" id="universeImg" accept="image/png, image/jpeg, image/jpg, image/webp" @change="uploadImageToClaudinary($event)">
                </div>
                <div className="col-8">
                    <ul className="list-group list-group-flush">
                        <label for="universeName">Nombre del Universo</label>
                        <input type="text" class="form-control" id="universeName" placeholder="Nombre del Universo" v-model="universo.nombre">
                        <label for="universeName">Historia del Universo</label>
                        <textarea type="text" class="form-control" id="universeHistoria" placeholder="Historia del Universo" rows="10" v-model="universo.historia"></textarea>
                    </ul>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'EditarUniverso',
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
        },
        guardarUniverso() {
            axios({
                method: "patch",
                url: "http://localhost:3333/universos/"+this.$route.params.id ,
                data: this.universo
            })
            .then( response => {
                console.log(response);
            })
            .catch( error => console.log(error));
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
        this.getUniversoById();
    },
    components: {
    }
}
</script>
  