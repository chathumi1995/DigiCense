<template>
  <div>
    <v-layout class="carousel" height="100%">
      <v-flex xs12 class="carousel">
        <carousel />
      </v-flex>
    </v-layout>

    <div id="LearnMore">
      <div class="container" id="how_works">
        <div class="row" id="how_works_row">
          <div class="col md-8">
            <h1>How It Works</h1>
          </div>
        </div>
        <br />
        <br />

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
import Carousel from "@/components/Home/Carousel.vue";
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  components: {
    Carousel
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
</style>