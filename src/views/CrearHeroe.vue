<template>
    <div>
        <h4>Crear Heroe</h4>
        <form @submit.prevent="guardarHeroe()">
            <div class="form-group row mt-5">
                <div className="col-4"> 
                    <img :src="heroe.url" 
                        :alt="heroe.superhero"
                        className="img-thumbnail"
                    />
                    <label for="heroImg">Suba Imagen</label>
                    <input type="file" class="form-control-file" id="heroImg" accept="image/png, image/jpeg, image/jpg, image/webp" @change="uploadImageToClaudinary($event)">
                </div>
                <div className="col-8">
                    <ul className="list-group list-group-flush">
                        <div class="form-group">
                            <label for="heroName">Nombre del Heroe</label>
                            <input type="text" class="form-control" id="heroName" placeholder="Nombre del heroe" v-model="heroe.superhero">
                        </div>
                        <div class="form-group">
                            <label for="heroPublisher">Ubiverso del Heroe</label>
                            <select class="form-control" id="heroPublisher" v-model="heroe.publisher">
                                <option :key="universo.id" v-for="universo in universos">{{ universo.nombre }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="heroAlterEgo">Alter Ego</label>
                            <input type="text" class="form-control" id="heroAlterEgo" placeholder="Alter Ego del heroe" v-model="heroe.alter_ego">
                        </div>
                        <div class="form-group">
                            <label for="heroFirstApparence">Primera Aparicion</label>
                            <input type="text" class="form-control" id="heroFirstApparence" placeholder="Primera aparicion del heroe" v-model="heroe.first_appearance">
                        </div>
                        <div class="form-group">
                            <label for="heroCharacter">Interptretes</label>
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
    name: 'Crearheroe',
    data(){
        return {
            heroe: {
                id: new Date().getMilliseconds(),
                url: null,
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
        guardarHeroe() {
            axios({
                method: "post",
                url: "http://localhost:3333/heroes/" ,
                data: this.heroe
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
  