<template>
  <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold">HeroCards App</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">HeroCards es una aplicacion diseniada como projecto final para el Diplomado Frontend con Vue de la universidad USIP. Esta aplicacion tiene como fin usar VUE para administrar informacion de tus heroes favortios de la infancia.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" @click="irAHeroes()">Heroes</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="irAUniversos()">Universos</button>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="container px-5">
        <img src="@/assets/hero-one.jpeg" class="img-fluid border rounded-3 shadow-lg mb-4 animate__animated animate__bounceInUp" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  methods: {
    irAHeroes(){
      this.$router.push({ name: 'heroes' });
    },
    irAUniversos(){
      this.$router.push({ name: 'universos' });
    }
  },
  components: {
    HelloWorld
  }
}
</script>
