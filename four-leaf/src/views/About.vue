<template>
  <v-content>
    <v-col>
            <v-container>

              <h1 class="text-center">About Us</h1>
            </v-container>
          </v-col>
    <div class="center">
      <v-img src="../assets/img6.jpg">
        <v-row align="inherit" justify-content:="center" class="lightbox white--text pa-2">
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>Four Leaf is America's #1 Point of Sales system. Four Leaf was founded in 2021 and was designed by the top creators in system programming. With iconic features that benefit employees and customers alike, we inspire to make all transactions pleasurable. We are active in 25 states. Also we are compatible with all systems in relavence to small businesses and resturaunts.  </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>
        <v-row>
          <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="12" sm="4">
            <v-card flat tile class="mx-auto">
              <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p>{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/img7.png"),
          name: 'Peter Washington',
          title: 'CEO'
        },
        {
          id: 2,
          src: require("../assets/img8.jpg"),
          name: 'Roy James',
          title: 'COO'
        },
        {
          id: 3,
          src: require("../assets/img10.jpg"),
          name: 'Lisa Quinn',
          title: 'Senior VP'
        }
      ]
    };
  }
};
</script>