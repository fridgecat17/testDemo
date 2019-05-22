<template>
  <header>
    <h1>{{title}}</h1>
  </header>
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
*{
  margin: 0;
  padding: 0;
}
header{
  color: aliceblue;
  padding: 10px 0;
  background-color: #4c6270;
  text-align: center;
}
</style>
