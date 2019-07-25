<template>
  <div>
    <div class="container" id="navbar">
      <div class="row">
        <Navbar></Navbar>
      </div>
    </div>
    <div class="container" id="carousel">
      <div class="row">
        <div class="col">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="2000"
            controls
            indicators
            background="#ababab"
            img-width="500"
            img-height="200"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img
                slot="img"
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              />
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>

    <div id="LearnMore">
      <div class="container" id="how_works">
        <div class="row" id="how_works_row">
          <div class="col md-8">
            <h1>How It Works</h1>
          </div>
        </div>
          
        <div id="LearnMore">
              
           <div class="container" id="how_works">
              <div class="row" id="how_works_row">
                <div class="col md-8"><h1>How It Works</h1></div>
                
                  
              </div>
              <br>
              <br>
             <!-- <v-layout row justify-center>
                <v-flex xs12 md4>
                <v-responsive class="px-5"> <img src="../assets/pic1.png" width="1000px"></v-responsive>
                </v-flex>
                </v-layout>    -->         

              <div class="row">
                <div class="col-12"><div><v-responsive class="px-5"><img src="../assets/pic1.png" class="responsive" id="how"></v-responsive></div></div>
                  <!--<div class="col"></div>
                <div class="col md-12 sm-12"><div><img src="../assets/pic1.png" class="responsive" id="how"></div></div>
                <div class="col"></div>-->
                  
              </div>
            </div>

        <div class="row">
          <div class="col-12">
            <div>
              <img src="../assets/pic1.png" class="responsive" id="how" />
            </div>
          </div>
          <!--<div class="col"></div>
                <div class="col md-12 sm-12"><div><img src="../assets/pic1.png" class="responsive" id="how"></div></div>
          <div class="col"></div>-->
        </div>
      </div>

      <div id="card" class="ml-3 mr-3 mt-auto p-3 mb-auto">
        <b-container id="cards" class="bv-example-row">
          <b-row>
            <b-col sm class="mb-auto">
              <transition
                name="fade"
                enter-active-class="animated jackInTheBox"
                leave-active-class="animated bounceOut"
              >
                <b-card bg-variant="secondary" text-variant="white" class="text-center" id="card1">
                  <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
              </transition>
            </b-col>
            <b-col sm class="mb-auto mt-1">
              <b-card
                bg-variant="secondary"
                text-variant="white"
                header="Secondary"
                class="text-center"
                id="card1"
              >
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </b-col>
            <b-col sm class="mb-auto mt-1">
              <b-card
                bg-variant="secondary"
                text-variant="white"
                header="Secondary"
                class="text-center"
                id="card1"
              >
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div id="footer">
        <div>
          <b-container id="contact_img">
            <b-row class="text-center">
              <b-col md="2"></b-col>
              <b-col md="8">
                <!--<img src="../assets/contact.png" id="contact" class="img-responsive">-->
                <div>
                  <b-img
                    src="http://www.blackberrypartnersfund.com/wp-content/uploads/2016/07/cross-device_app_ecosystem-desktop-tablet-phone.jpg"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                </div>
              </b-col>
              <b-col md="2"></b-col>
            </b-row>
            <br />

            <b-row class="text-center">
              <b-col align-self="start"></b-col>
              <b-col>
                <b-button
                  variant="secondary"
                  id="button_store"
                  href="https://play.google.com/store/movies"
                >
                  <img src="../assets/playstore_1.png" id="playstore" />
                </b-button>&nbsp;
                <b-button id="button_store" href="https://www.apple.com/ios/app-store/">
                  <img src="../assets/ios.png" id="playstore" />
                </b-button>
              </b-col>
              <b-col align-self="end"></b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style>
#how_works {
  height: 600px;
}
#button_store {
  background-color: rgb(226, 222, 222, 1);
  border: 0ch;
}
#how_works_row {
  text-align: center;
}

#card1 {
  opacity: 0.4;
  height: 300px;
}
#cards {
  padding: 50px;
}

#contact {
  width: 700px;
  height: 400px;
  -ms-flex-align: center;
}

#playstore {
  width: 132px;
  height: 40px;
}
#contact1 {
  height: 500px;
}
/*.responsive {
  width: 100%;
  height: auto;
}
#how{
  width: 600px;
  height: 400px;
}*/
#footer {
  width: 100%;
  height: 100%;
  /* background: url("https://picsum.photos/1024/480/?image=58") no-repeat center center fixed;*/
  background-color: rgb(226, 222, 222, 1);
  background-size: cover;
  position: relative;
}
</style>