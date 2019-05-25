<template>
  <div class="container">
    <Loding v-if="flag"></Loding>
    <div v-for="(data,index) in dataList" :key="index">
      <div v-for="role in data" :key="role.id">
        <ul>
          <li class="title">{{role.nm}}</li>
          <li>地址：{{role.addr}}</li>
          <li>距离：{{role.distance}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JCQ",
  data() {
    return {
      dataList: [],
      flag:true,
    };
  },
  methods: {},
  mounted() {
    this.axios.get("/api/cinemaList?cityId=60").then(res => {
      if (res.data.status === 0) {
        this.flag = false;
        this.dataList = res.data.data;
      }
    });
  }
};
</script>

<style scoped>
.title{
  font-size: 17px;
  font-weight: bold;
}
ul {
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}
li {
  margin: 10px;
}
</style>
