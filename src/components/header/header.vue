<template>
  <header>
    <div class="Htitle">
      <slot></slot>
      <h1>{{title}}</h1>
    </div>
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

<style scoped>
header {
  height: 60px;
  z-index: 10;
}
.Htitle {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  color: aliceblue;
  padding: 10px 0;
  background-color: #4c6270;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
