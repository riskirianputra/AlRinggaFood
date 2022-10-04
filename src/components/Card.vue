<template>
  <br>
  <div class="card shadow card-product">
    <img :src=" '../assets/images/' + products.gambar " class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ products.nama }}</h5>
      <p class="card-text">Harga : Rp. {{ products.harga }}</p>
      <router-link class="btn btn-success" :to="'/food/'+products.id"> Pesan</router-link>
    </div>
  </div>

</template>

<script>
export default {
    name: 'card',
    props: ['products']
}
</script>

<style>

</style>