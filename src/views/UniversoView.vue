<template>
    <div>
        <header>
            <h4>Universos de Heroes</h4>
            <hr>
        </header>
        <main>
            <section>
                <div class="card mb-3 align-items-center">
                    <div class="d-flex p-2 w-50">
                        <img src="../assets/dc-banner.webp" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id exercitationem ab accusamus unde possimus, reiciendis dolor mollitia excepturi adipisci, aut recusandae, quam assumenda sed vitae eos ea et vero! Iusto.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
                <div class="card mb-3 align-items-center">
                    <div class="d-flex p-2 w-50">
                        <img src="../assets/marvel-banner.webp" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id exercitationem ab accusamus unde possimus, reiciendis dolor mollitia excepturi adipisci, aut recusandae, quam assumenda sed vitae eos ea et vero! Iusto.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
                <div class="card mb-3 align-items-center">
                    <div class="d-flex p-2 w-50">
                        <img src="../assets/kombat-banner.png" class="card-img-top" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id exercitationem ab accusamus unde possimus, reiciendis dolor mollitia excepturi adipisci, aut recusandae, quam assumenda sed vitae eos ea et vero! Iusto.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" class="btn btn-primary">Editar</a>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
  
<script>
export default {
    name: 'UniversoView',
    data(){
        return {
            mensaje: 'Universos'
        }
    },
    methods: {

    },
    computed: {

    },
    mounted(){
        
    },
    components: {
    }
}
</script>
  