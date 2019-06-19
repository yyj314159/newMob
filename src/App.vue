<template>
    <router-view></router-view>
</template>

<script>
    import $ from 'jquery';
    export default {
      name: 'app',
      components: {

      },
      mounted(){
          console.log($("body"));
      }

    }
</script>

<style lang="scss">

</style>
