<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best<strong>Food</strong></h2>
        </div>
        <div class="col">
          <router-link to="/food" class="btn btn-success float-right">
            Lihat Semua
          </router-link>
        </div>
      </div>
      <div class="row mb-3">
          <div class="col-md-3 mt-4" v-for="products in product" :key="products.id">
            <card :products="products"/>
          </div>
      </div>
    </div>
  </div>
      
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

import Card from "@/components/Card.vue";
import axios from "axios";


export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    Card,
  },
  //membuat data, data yang ada di API di lempar kesini
  data(){
    return{
      product:[]
    }
  },
  // membuat methods untuk memanggil data 
  methods:{
    setProduct(data){
      this.product = data
    }
  },
  // menjalankan axios
  mounted(){
    axios
  .get('http://localhost:3000/best-products')
  .then( (response) => this.setProduct(response.data))
  .catch( (error) => console.log(error));
  
},

};
</script>
<style >

</style>
