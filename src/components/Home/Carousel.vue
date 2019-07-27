<template>
  <v-carousel hide-controls height="100%">
    <v-carousel-item height="100%" v-for="(item,i) in items" :key="i" :src="item.src">
      <v-jumbotron color="transparent">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3 font-weight-light">Join with us Today</h3>
              <h1 class="display-4 font-weight-light subheading">Join with us Today</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          src:
            "https://www.wallpapermaiden.com/wallpaper/23138/download/3840x2160/peugeot-3008-mountain-driving-road-suv-cars.jpeg"
        },
        {
          src:
            "https://images.wallpaperscraft.com/image/mustang_gt_mustang_wheel_139853_3840x2160.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>
