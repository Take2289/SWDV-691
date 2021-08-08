<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field hide-details label="Search items" prepend-icon="mdi-magnify" single-line></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <span class="blue--text mt-9">29 Items</span>
        <v-btn text class="mt-7">
          <v-icon color="blue" class="mr-n10">menu</v-icon>
        </v-btn>
        <v-btn text class="mt-7">
          <v-icon color="blue">dashboard</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="300" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B1.jpg" width="200" height="200"></v-img>

              <v-card-text class="black--text">
                CheeseBurger and Fries Deluxe
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>1</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B2.jpg" width="200" height="200"></v-img>

              <v-card-text class="black--text">
                Chicken Fingers and Fries
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>2</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B3.jpg" width="220" height="200"></v-img>

              <v-card-text class="black--text">
                Chicken Sandwich and Fries
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>3</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B4.jpg" width="200" height="200"></v-img>

              <v-card-text class="black--text">
                Chicken Nuggets and Fries
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>4</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B9.jpg" width="250" height="180"></v-img>

              <v-card-text class="black--text">
                Double Cheeseburger and Fries Deluxe
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>5</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B6.jpg" width="230" height="180"></v-img>

              <v-card-text class="black--text">
                Pepperjack BBQ Burger Deluxe and Fries
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>6</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B7.jpg" width="210" height="200"></v-img>

              <v-card-text class="black--text">
                Turkey Burger Deluxe
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>7</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heith="250" align="center">
              <v-card-actions color="">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="B8.jpg" width="200" height="200"></v-img>

              <v-card-text class="black--text">
                Veggie Burger Deluxe
              </v-card-text>
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 80%;">
                  <v-btn outlined color="black"> Detail</v-btn>
                </div>

              </v-expand-transition>
              <v-btn absolute color="blue" class="white--text" fab medium left top>
                <h1>8</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'home',
    components: {},
    computed: {
      theme() {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
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