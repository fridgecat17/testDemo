<template>
  <div class="container">
    <header>
      <div class="Htitle">
        <slot></slot>
        <h1>{{title}}</h1>
      </div>
    </header>
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
header {
  width: 100%;
  color: aliceblue;
  padding: 10px 0;
  background-color: #4c6270;
/*   position: absolute;
  top: 0;
  z-index: 10; */
}
.Htitle{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
