<template>
  <div class="container">
    <header>
      <h1>{{title}}</h1>
    </header>
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "Seraphim"
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.block{
  height: 60px;
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  color: aliceblue;
  padding: 10px 0;
  background-color: #4c6270;
  text-align: center;
}
</style>
