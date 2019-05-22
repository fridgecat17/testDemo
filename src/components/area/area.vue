<template>
  <div class="area">
    <div class="container">
      <div class="areaBlock">
        <ul class="areaList" v-for="(area,index) in areaList" :key="index">
          <li>{{area}}</li>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Area",
  data() {
    return {
      activeName: "first",
      areaList: [
        "中央庭",
        "东方古街",
        "高校学院",
        "中央公园",
        "研究所",
        "海湾侧城",
        "旧城区",
        "港湾区"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.area {
  height: 100%;
  width: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
li {
  text-align: center;
  font-size: 16px;
  list-style: none;
  font-weight: 900;
  align-self: flex-start;
  padding: 20px 0;
}
li:hover {
  background-color: #fff;
}
.areaBlock {
  width: 90px;
  position: fixed;
  background: #eaeaea;
  height: 100%;
}
</style>
