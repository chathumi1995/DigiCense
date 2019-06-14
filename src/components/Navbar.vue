<template>
    <div>
      
     <b-navbar toggleable="lg" type="dark" class="nav-background">      
         <b-navbar-brand href="#"> <img src="\‪assets\digicense.png" id="logo">
                DigiCense
                
        </b-navbar-brand>             
                <b-navbar-nav class="ml-auto">       
                    <b-nav-item to="/"><p class="text-white bg-dark">Home</p></b-nav-item>
                    <!--<b-link to="/Home"><p class="text-white bg-dark">Home</p></b-link>-->
                    <b-nav-item href="#"><p class="text-white bg-dark">Learn More</p></b-nav-item>    
                    <b-nav-item href="#"><p class="text-white bg-dark">FAQ</p></b-nav-item>
                    <b-nav-item to="/login"><p class="text-white bg-dark">Login</p></b-nav-item>--> 
                     <!--<b-link to="#"><p class="text-white bg-dark">Learn More</p></b-link>
                      <b-link to="#"><p class="text-white bg-dark">FAQ</p></b-link> 
                    <b-link to="/Login"><p class="text-white bg-dark">Login</p></b-link>-->
                              
         </b-navbar-nav>     
    </b-navbar>
    
  
    </div>    
</template>


<style>
  .nav-background {
    background: #353535;
  }
  #logo{
    width: 50px;
    height: 50px;
  }
  
</style>