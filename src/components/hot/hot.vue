<template>
  <div class="container">
    <div class="box" ref="box">
      <div class="moviesBox" ref="moviesBox">
        <div class="movie" v-for="movie in movieList" :key="movie.id" @tap="handleTap">
          <div class="movie-img">
            <img :src="movie.img | setImg('120.180')">
          </div>
          <div class="movie-info">
            <ul>
              <li class="title">{{movie.nm}}</li>
              <li>主演：{{movie.star}}</li>
              <li v-if="movie.sc!=0">评分：{{movie.sc}}</li>
              <li v-else>评分：暂未统计</li>
              <li>最近场次：{{movie.rt}}</li>
              <li>{{movie.showInfo}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "hot",
  data() {
    return {
      movieList: []
    };
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      if (res.data.status === 0) {
        this.movieList = res.data.data.movieList;
        //vue 自带的方法：保证数据在赋值完成之后，在页面渲染完成后再去触发这个方法的回调
        this.$nextTick(() => {
          //有两个参数，第一个参数是执行滚动的外层容器，第二个参数是需要执行滚动的元素
          new BScroll(this.$refs.box, {
            tap: true
          });
        });
      }
    });
  },
  methods: {
    handleTap() {
      console.log("handleTAP");
    }
  }
};
</script>

<style scoped>
.movie {
  width: 100%;
  margin: 10px 0;
  border-bottom: 2px dashed grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.movie-info {
  width: 100%;
  align-self: center;
  padding-left: 10px;
}
li {
  width: 230px;
  list-style: none;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #eaeaea;
  padding-left: 5px;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #eaeaea;
  justify-content: flex-start;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>