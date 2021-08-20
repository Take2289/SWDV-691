<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field hide-details label="Search items" prepend-icon="mdi-magnify" single-line></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn text class="mt-7">
          <v-icon color="blue" class="mr-n10">menu</v-icon>
        </v-btn>
        <v-btn text class="mt-7">
          <v-icon color="blue">dashboard</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" class="mb-4" v-for="(item, i) in items"
          :key="i">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="370" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn value="icon">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img :src="item.Image" width="200" height="200"></v-img>

              <v-card-text class="black--text" v-text="item.Name" >
              </v-card-text>
              <v-card-text class="black--text" v-text="item.Price">
              </v-card-text>
            
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>{{i+1}}</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import PrimaryButton from './components/PrimaryButton.vue'
  // @ is an alias to /src
import axios from 'axios';


  export default {
    props:{
      value: String
    },
    name: 'home',
    components: {
      PrimaryButton
    },
    computed: {
      theme() {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    },
    data:() => ({
      selectedItem: 1,
      items: null,
    }),
    mounted () {
      axios.get("http://localhost:3000/fooditems").then(response => {this.items = response.data;
      console.log(this.items);
      })
    },
  }
</script>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>