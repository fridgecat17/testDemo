<template>
  <div class="container">
    <header class="Htitle">
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

<style scoped>
.Htitle {
  width: 100%;
  color: aliceblue;
  padding: 10px 0;
  background-color: #4c6270;
  text-align: center;
  position: fixed;
  top: 0;
}
.block{
  height: 55px;
}
</style>
