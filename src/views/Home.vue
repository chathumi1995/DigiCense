<template>
  <div>
    <!-- carousel -->
    <v-layout class="carousel" height="100%">
      <v-flex xs12 class="carousel">
        <carousel />
      </v-flex>
    </v-layout>

    <!-- know more about digicense -->
    <div class="about-us py-5" id="about-us">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <h1 class="text-warning">Welcome!</h1>
            <h2>Know More About Us</h2>
            <hr />
            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etae magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button type="button" class="btn btn-warning">Let's Know More</button>
          </div>
          <div class="col-md-6">
            <img
              src="http://themebubble.com/demo/marketingpro/wp-content/uploads/2016/10/seo-slide.png "
              alt
            />
          </div>
        </div>
      </div>
    </div>

    <!-- parallax -->
    <v-parallax light src="https://i.ibb.co/9sfxYzL/a1.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-4">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-layout>
    </v-parallax>

    <!-- features -->
    <div class="section-block-grey">
      <div class="container">
        <div class="section-heading center-holder">
          <h3>Doing the right thing at the right time</h3>
          <div class="section-heading-line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <br />incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="row mt-60">
          <div class="col-md-4 col-sm-12 col-12">
            <div class="serv-section-2">
              <div class="serv-section-2-icon">
                <i class="fas fa-gem"></i>
              </div>
              <div class="serv-section-desc">
                <h4>Planning</h4>
                <h5>Business Planning</h5>
              </div>
              <div class="section-heading-line-left"></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12">
            <div class="serv-section-2 serv-section-2-act">
              <div class="serv-section-2-icon serv-section-2-icon-act">
                <i class="fas fa-cogs"></i>
              </div>
              <div class="serv-section-desc">
                <h4>Management</h4>
                <h5>Retirement Planning</h5>
              </div>
              <div class="section-heading-line-left"></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12">
            <div class="serv-section-2">
              <div class="serv-section-2-icon">
                <i class="fas fa-signature"></i>
              </div>
              <div class="serv-section-desc">
                <h4>Accumulation</h4>
                <h5>Support and Sell</h5>
              </div>
              <div class="section-heading-line-left"></div>
            </div>
          </div>
        </div>
        <div class="row mt-60">
          <div class="col-md-4 col-sm-12 col-12">
            <div class="serv-section-2">
              <div class="serv-section-2-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="serv-section-desc">
                <h4>Security</h4>
                <h5>Secure Business</h5>
              </div>
              <div class="section-heading-line-left"></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12">
            <div class="serv-section-2 serv-section-2-act">
              <div class="serv-section-2-icon serv-section-2-icon-act">
                <i class="far fa-clock"></i>
              </div>
              <div class="serv-section-desc">
                <h4>24/7 Available</h4>
                <h5>All time available</h5>
              </div>
              <div class="section-heading-line-left"></div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12">
            <div class="serv-section-2">
              <div class="serv-section-2-icon">
                <i class="fas fa-signature"></i>
              </div>
              <div class="serv-section-desc">
                <h4>Customer Support</h4>
                <h5>Support and Sell</h5>
              </div>
              <div class="section-heading-line-left"></div>
            </div>
          </div>
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
.mt-60 {
  margin-top: 60px;
}

.section-block-grey {
  padding: 90px 0px 90px 0px;
  background-color: #f9f9f9;
}

.serv-section-2 {
  position: relative;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(50, 50, 50, 0.16);
  border-radius: 5px;
  overflow: hidden;
  padding: 30px;
}

.serv-section-2:before {
  position: absolute;
  top: 0;
  right: 0px;
  z-index: 0;
  content: " ";
  width: 120px;
  height: 120px;
  background: #f5f5f5;
  border-bottom-left-radius: 136px;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}

.serv-section-2-icon {
  position: absolute;
  top: 18px;
  right: 22px;
  max-width: 100px;
  z-index: 1;
  text-align: center;
}

.serv-section-2-icon i {
  color: #f8c822;
  font-size: 48px;
  line-height: 65px;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}

.serv-section-desc {
  position: relative;
}

.serv-section-2 h4 {
  color: #333;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
}

.serv-section-2 h5 {
  color: #333;
  font-size: 17px;
  font-weight: 400;
  line-height: 1;
  margin-top: 5px;
}

.section-heading-line-left {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  background: #000000;
  border-radius: 25%;
  margin-top: 15px;
  margin-bottom: 5px;
}

.serv-section-2 p {
  margin-top: 25px;
  padding-right: 50px;
}

.serv-section-2:hover .serv-section-2-icon i {
  color: #fff;
}

.serv-section-2:hover:before {
  background: #f8c822;
}
.carousel {
  height: 100vh;
}
</style>