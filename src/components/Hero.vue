<template>

    
<div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">                       
                        <h2>
                            <strong>Delicious Food Menu,</strong>
                            <br/>in Your Gadget
                        </h2>
                        <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
                        <router-link class="btn btn-lg btn-success" to="/food">
                            Pesan
                        </router-link>
                    </div>
                </div>                       
            </div>          
                <div class="col-md-6">
                    <img class="kanan" src="../assets/images/hero.png" width="500" />
                </div>
            </div>
        </div>
   
    <div class="d-sm-block d-md-none">
        <div class="row mt-4">
            <div class="col-md-4">
                <img src="../assets/images/hero.png" width="500"/>               
            </div>
            <div class="col-md-6">                
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">                    
                        <h2>
                            <strong>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Delicious Food Menu,</strong>
                            <br/>&nbsp; &nbsp; &nbsp; &nbsp; in Your Gadget
                        </h2>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ayo segera pilih dan pesan makanan favorit Anda</p>
                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <router-link class="btn btn-lg btn-success" to="/food">                            
                            Pesan
                        </router-link>
                    </div>
                </div>                       
            </div>        
           
        </div>
    </div>
</div>  
   
   
  
</template>

<script>
export default {
    name: "Hero",
}
</script>

<style>
    img.kanan {
    float: right;
    margin: 10px;
}
</style>