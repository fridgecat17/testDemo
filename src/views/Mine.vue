<template>
  <div class="container">
    <div class="mine">
      <Header title="Mine"></Header>
      <h1>mine</h1>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
export default {
  name: "mine",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
