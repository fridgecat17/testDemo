<template>
  <div class="area">
    <div class="areaBlock">
      <ul class="areaList" :v-show="flag" v-for="(area,index) in areaList" :key="index">
        <li>{{area}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Area",
  data() {
    return {
      flag: true,
      areaList: [
        "中央庭",
        "东方古街",
        "高校学院",
        "中央公园",
        "研究所",
        "海湾侧城",
        "旧城区",
        "港湾区"
      ],
    };
  }
}
</script>

<style scoped>
.area{
  height: 80%;
  width: 100%;
  position: absolute;
}
li {
  text-align: center;
  font-size: 18px;
  list-style: none;
  font-weight: 900;
  align-self: flex-start;
  margin-bottom: 30px;
}
.areaBlock{
  width: 100px;
  border-right: 1px solid #696969;
  background: #f1f1f1;
  height: 100%;
  padding-top: 20px;
}
</style>
