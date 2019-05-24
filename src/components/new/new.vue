<template>
  <div class="container">
    <div class="moviesBox">
      <div class="movie" v-for="(movie,index) in moviesList" :key="index">
        <div class="movie-img">
          <img :src="movie.img | setImg('120.180')" alt srcset>
        </div>
        <div class="movie-info">
          <ul>
            <li class="title">{{movie.nm}}</li>
            <li>主演：{{movie.star}}</li>
            <li>上映日期：{{movie.rt}}</li>
            <li>{{movie.showInfo}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new",
  data() {
    return {
      moviesList: []
    };
  },
  mounted() {
    this.axios.get("/api/movieComingList?cityId=10").then(res => {
      if (res.data.status === 0) {
        this.moviesList = res.data.data.comingList;
      }
    });
  }
};
</script>

<style scoped>
.movie {
  margin: 10px 0;
  border-bottom: 2px dashed grey;
}
.movie-info {
  align-self: center;
  padding-left: 10px;
}
.movie {
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