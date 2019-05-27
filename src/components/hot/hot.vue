<template>
  <div class="container">
    <div class="box">
      <li>{{pullDownMsg}}</li>
      <Loding v-if="flag"></Loding>
      <div v-else class="moB">
        <Scroller :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
          <div class="moviesBox">
            <div @tap="toDetail(movie.id)" class="movie" v-for="movie in movieList" :key="movie.id">
              <div class="movie-img">
                <img :src="movie.img | setImg('128.180')">
              </div>
              <div class="movie-info">
                <li class="title">{{movie.nm}}</li>
                <li>主演：{{movie.star}}</li>
                <li v-if="movie.sc!=0">评分：{{movie.sc}}</li>
                <li v-else>评分：暂未统计</li>
                <li>最近场次：{{movie.rt}}</li>
                <li>{{movie.showInfo}}</li>
              </div>
            </div>
          </div>
        </Scroller>
      </div>
    </div>
  </div>
</template>

<script>
//import BScroll from "better-scroll";
export default {
  name: "hot",
  data() {
    return {
      movieList: [],
      pullDownMsg: "",
      flag: true
    };
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      if (res.data.status === 0) {
        this.flag = false;
        this.movieList = res.data.data.movieList;
        //vue 自带的方法：保证数据在赋值完成之后，在页面渲染完成后再去触发这个方法的回调
        /* this.$nextTick(() => {
          //有两个参数，第一个参数是执行滚动的外层容器，第二个参数是需要执行滚动的元素
          new BScroll(this.$refs.box, {
            tap: true
          });
        }); */
      }
    });
  },
  methods: {
    /* handleTap() {
      console.log("handleTAP");
    } */
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDownMsg = "正在更新中";
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        this.axios.get("/api/movieOnInfoList?cityId=20").then(res => {
          if (res.data.status === 0) {
            this.pullDownMsg = "更新成功";
            setTimeout(() => {
              this.movieList = res.data.data.movieList;
              this.pullDownMsg = "";
            }, 500);
          }
        });
      }
    },
    toDetail(movieId) {
      this.$router.push("/detail/" + movieId);
    }
  }
};
</script>

<style scoped>
.moviesBox {
  width: 100%;
  background-color: #eaeaea;
  flex:1;
  position: relative;
}
.movie-info {
  align-self: center;
  padding-left: 10px;
}
.movie {
  margin: 10px 0;
  border-bottom: 2px dashed grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
li {
  width: 230px;
  list-style: none;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  background-color: #eaeaea;
  padding-left: 5px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>