<template>
  <div class="container">
    <Loding v-if="flag"></Loding>
    <Scroller v-else>
      <div class="moviesBox">
        <div  @tap="toDetail(movie.id)" class="movie" v-for="(movie,index) in moviesList" :key="index">
          <div class="movie-img">
            <img :src="movie.img | setImg('128.180')">
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
    </Scroller>
  </div>
</template>

<script>
export default {
  name: "new",
  data() {
    return {
      moviesList: [],
      flag: true
    };
  },
  mounted() {
    this.axios.get("/api/movieComingList?cityId=10").then(res => {
      if (res.data.status === 0) {
        this.flag = false;
        this.moviesList = res.data.data.comingList;
      }
    });
  },
  methods:{
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
  flex: 1;
  position: relative;
}
.movie-info {
 align-self: flex-start;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.movie {
  width: 100%;
  margin: 10px 0;
  border-bottom: 2px dashed grey;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
li {
  width: 100%;
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