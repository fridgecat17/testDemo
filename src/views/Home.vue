<template>
  <div class="box">
    <div class="home">
      <div>
        <Header></Header>
      </div>
      <div class="tabBar-block">
        <div class="tabbar">
          <div class="area title">
            <!-- <router-link to="area">AREA</router-link> -->
            <router-link to="/area">AREA</router-link>
          </div>
          <div class="new title">
            <router-link to="/new">NEW</router-link>
          </div>
          <div class="hot title">
            <router-link to="/hot">HOT</router-link>
          </div>
        </div>
      </div>
      <div class="container">
        <keep-alive>
          <router-view/>
        </keep-alive>
        
      </div>
      <router-view name="detail"/>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
}
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.tabBar-block {
  width: 100%;
  z-index: 100;
}
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
  margin-top: 10px;
  margin-bottom: 1px;
}
.title .router-link-active {
  color: #42b983;
  border-bottom: 1px solid darkblue;
}
.container {
  overflow: scroll;
}
</style>
