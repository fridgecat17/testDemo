<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="tabbar">
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
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header/header";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.tabbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #eaeaea;
}
.title {
  font-size: 18px;
  font-weight: 900;
  margin: 10px 0;
}
.title .router-link-active {
  color: #42b983;
  border-bottom: 1px solid darkblue;
}
</style>
