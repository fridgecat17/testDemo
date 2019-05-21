<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <div class="area title">
        <!-- <router-link to="area">AREA</router-link> -->
        <router-link to="area">
          AREA
          <select>
            <option value="中央庭">中央庭</option>
            <option value="东方古街">东方古街</option>
            <option value="高校学院">高校学院</option>
            <option value="中央公园">中央公园</option>
            <option value="研究所">研究所</option>
            <option value="海湾侧城">海湾侧城</option>
            <option value="旧城区">旧城区</option>
            <option value="港湾区">港湾区</option>
          </select>
        </router-link>
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
select {
  -webkit-appearance: none; /* google */
  -moz-appearance: none; /* firefox */
  appearance: none; /* IE */
  background: #eaeaea;
}
</style>
