<template>
  <div class="container">
    <div class="moviesBox">
      <div class="movie" v-for="movie in movieList" :key="movie.id">
        <div class="movie-img">
          <img :src="movie.img | setImg('120.180')">
        </div>
        <div class="movie-info">
          <ul>
            <li class="title">{{movie.nm}}</li>
            <li>主演：{{movie.star}}</li>
            <li v-if="movie.sc!=0">评分：{{movie.sc}}</li>
            <li v-else>评分：新上映 暂未统计</li>
            <li>最近场次：{{movie.rt}}</li>
            <li>{{movie.showInfo}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      }
    });
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
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #eaeaea;
  padding-left: 5px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>