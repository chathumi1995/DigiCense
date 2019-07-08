<template>
    <div>
      
     <b-navbar toggleable="lg" type="dark" class="nav-background">                 
         <img src="../assets/digicense.png" id="logo">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>    
              <b-collapse id="nav-collapse" is-nav>                 
                <b-navbar-nav class="ml-auto"> <!--Right aligned nav items-->      
                    <b-nav-item to="/"><p class="text-white bg-dark">Home</p></b-nav-item>                  
                    <b-nav-item to="#LearnMore"><p class="text-white bg-dark">Learn More</p></b-nav-item>    
                    <b-nav-item to="#"><p class="text-white bg-dark">FAQ</p></b-nav-item>
                    <b-nav-item to="/login"><p class="text-white bg-dark">Login</p></b-nav-item>                            
                </b-navbar-nav> 
              </b-collapse>                  
      </b-navbar>
    
  
    </div>    
</template>


<style>
  .nav-background {
    background: #353535;
    height: 70px;  
  }
 
  #logo{
    width: 60px;
    height: 60px;
  }
  
</style>