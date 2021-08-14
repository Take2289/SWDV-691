<template>
  <div id="app">
    <v-app>
   <div>
        <v-toolbar color="grey lighten-2">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title><a href="/">ShoppingCart</a></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn>
                Four Leaf
                </v-btn>
                <v-btn :to="{name: 'Checkout'}">
                    <v-badge left color="green">
                        <span slot="badge"></span>
                        <v-icon>shopping_cart</v-icon> Cart
                    </v-badge>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
    
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
  <div>

  <div class="fluid-container footer">
    <p class="text-center"> Copyright &copy; 2021, Fourleaf Marketing. All Rights Reserved.</p>
  </div>
</div>
  


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
.fluid-container.footer{
  background: rgb(246, 246, 248);
}
.fluid-container.footer > *:last-child {
    margin-bottom: 0px;
    color: rgb(58, 48, 48);
    font: 8px "Helvetica"80;
}
</style>