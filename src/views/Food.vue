<template>  
    <div>
        <Navbar />
            <div class="container">
                <div class="row mt-4">
                    <div class="col">
                        <h2> DAFTAR <strong>MAKANAN</strong></h2>
                    </div>
                </div>
          
                <div class="input-group mb-4">        
                    <input v-model="search" type="text" class="form-control" placeholder="Cari Makanan Kesukaan Anda" aria-label="Cari Makanan Kesukaan Anda" aria-describedby="basic-addon1" @keyup="searchFood">
                    <span class="input-group-text" id="basic-addon1">Cari</span>
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
    import Navbar from '@/components/Navbar.vue'
    import Card from "@/components/Card.vue";
    import axios from "axios";

    export default {
        name: "Food",
        components : {
            Navbar,
            Card
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
            },
            searchFood(){
            axios
            .get('http://localhost:3000/products?q='+this.search)
            .then( (response) => this.setProduct(response.data))
            .catch( (error) => console.log(error));
            }
        },
        // menjalankan axios
        mounted(){
            axios
        .get('http://localhost:3000/products')
        .then( (response) => this.setProduct(response.data))
        .catch( (error) => console.log(error));        
        },
    }
</script>

<style>

</style>

