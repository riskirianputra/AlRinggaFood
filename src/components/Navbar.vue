<template>
  
<div>
  <div class="d-none d-md-block">
    <div class="text-center p-2 nav-logo">
      <a href="/"><img src="../assets/images/Alringga.jpg" alt="" style="height: 50px"></a>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">                     
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>      
          <div class="navbar-collapse justify-content-md-center collapse" id="navbarsExample10" style> 
            <ul class="navbar-nav me-auto mb-1 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link text-center mx-3 nav-active" to="/" style="letter-spacing: 1px; font-size:25px"> Home </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-center mx-3 nav-active" to="/food" style="letter-spacing: 1px; font-size:25px"> Food</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-center mx-3 nav-active" to="/about" style="letter-spacing: 1px; font-size:25px"> About</router-link>
              </li>    
              <li class="nav-item">
                  <router-link class="nav-link text-center mx-3 nav-active" to="Library" style="letter-spacing: 1px; font-size:25px"> Library </router-link>         
              </li>    
              <li class="nav-item">
                  <router-link class="nav-link text-center mx-3 nav-active" to="/contact" style="letter-spacing: 1px; font-size:25px"> Contact us </router-link>         
              </li>                 
            </ul>    
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <router-link class="nav-link" to="/keranjang" style="letter-spacing: 1px; font-size:25px"> Keranjang </router-link>         
              </li>          
            </ul>   
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <router-link class="nav-link" to="/login" style="letter-spacing: 1px; font-size:25px"> Login </router-link>         
              </li>          
            </ul>                   
          </div>
      </div>
    </nav> 
  </div>

  <div class="d-sm-block d-md-none">
    <nav class="navbar navbar-expand-lg ">
      <div class="container">         
        <a href="/"><img src="../assets/images/logo-efektifpro-color.png" alt="" style="height: 50px"></a>         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>      
          <div class="navbar-collapse justify-content-md-center collapse" id="navbarsExample10" style=""> 
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/"> Home </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/food"> Food</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about"> About</router-link>
              </li>                                           
            </ul>      
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <router-link class="nav-link" to="/keranjang"> Keranjang </router-link>         
              </li>          
            </ul>   
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <router-link class="nav-link" to=""> Login </router-link>         
              </li>          
            </ul>          
          </div>
      </div>
    </nav> 
  </div>
</div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>


@import'bootstrap/dist/css/bootstrap.css'

</style>


