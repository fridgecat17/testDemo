<template>
  <div class="container">
    <div class="areaBlock">
      <ul class="areaList">
        <router-link to="/area/ZYT" tag="li">中央庭</router-link>
        <router-link to="/area/DFGJ" tag="li">东方古街</router-link>
        <router-link to="/area/GXXY" tag="li">高校学院</router-link>
        <router-link to="/area/ZYGY" tag="li">中央公园</router-link>
        <router-link to="/area/YJS" tag="li">研究所</router-link>
        <router-link to="/area/HWCC" tag="li">海湾侧城</router-link>
        <router-link to="/area/JCQ" tag="li">旧城区</router-link>
        <router-link to="/area/GWQ" tag="li">港湾区</router-link>
      </ul>
    </div>
    <div class="box"></div>
    <div class="block">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Area",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.box{
  height: 38px;
}
.areaBlock {
  left: 0;
  right: 0;
  position: fixed;
  top: 99px;
  overflow-x: scroll;
  overflow-y: hidden;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
li {
  text-align: center;
  font-size: 16px;
  list-style: none;
  font-weight: 900;
  align-self: flex-start;
  margin-top: 5px;
  padding: 5px 10px 5px 10px;
  width: 90px;
  white-space: nowrap;
}
.areaList {
  display: flex;
  flex-direction: row;
  background: #eaeaea;
  height: 100%;
  overflow: auto;
}
.areaList .router-link-active {
  background-color: #fff;
}
.block {
  background-color: #c2bcbc;
}
</style>
