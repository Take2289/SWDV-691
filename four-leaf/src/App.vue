<template>
  <div id="app">
    <v-app>
   
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      color= "grey lighten-2"
    >
      <v-sheet
        color="blue"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
          
        ></v-avatar>

        <div>Employee@Fourleaf.com</div>
      </v-sheet>

      <v-divider></v-divider>
     
    <div id="nav">
       
    </div> 
      <v-list>
        <v-list-item to="/Login">Login</v-list-item>
        <v-list-item to="/">Home</v-list-item> 
        <v-list-item to="/about">About</v-list-item> 
        <v-list-item to="/Orders">Orders</v-list-item>
         <v-list-item to="/Checkout">Checkout</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
        
      >

    <router-view/>
      </v-container>
    </v-main>
  </v-app>
    


  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgb(88, 147, 202);
}
#nav {
  padding: 3 0px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>