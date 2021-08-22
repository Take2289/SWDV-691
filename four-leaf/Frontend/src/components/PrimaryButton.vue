<template>
  <div>

    <v-btn @click="count++"></v-btn>
  </div>
</template>

<script>
export default{
    props: {
        value: String
    },

    data:function() {
        return {
            ObjectID:0

        };
    }
}
</script>
