<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <div class="area title">
        <!-- <router-link to="area">AREA</router-link> -->
        <router-link to="area">AREA</router-link>
      </div>
      <div class="new title">
        <router-link to="new">NEW</router-link>
      </div>
      <div class="hot title">
        <router-link to="hot">HOT</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/header";

export default {
  name: "home",
  data() {
    return {
     
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #eaeaea;
  padding: 10px 0;
}
.title {
  font-size: 18px;
  font-weight: 900;
}

</style>
