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
            <li>最近场次：{{movie.rt}}</li>
            <li>影院信息：{{movie.showInfo}}</li>
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
  margin: 10px 0;
  border-bottom: 2px dashed grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.movie-info {
  align-self: center;
  padding-left: 10px;
}
li {
  list-style: none;
  margin-bottom: 15px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eaeaea;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>