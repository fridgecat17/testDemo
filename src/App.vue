<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  height:100%;
  width: 100%;
  position: absolute;
}
li {
  list-style: none;
}
</style>
