<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on">Checkout</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Checkout</v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>