<template>
  <div class="container">
    <div class="Role">
      <Header title="Role"></Header>
      <div class="search">
        <input type="text" placeholder="请输入需要搜索的电影" v-model="keywords">
        <button class="btn">搜索</button>
      </div>
      <div class="movie" v-for="movie in movieList" :key="movie.id">
        <div class="movie-img">
          <img :src="movie.img | setImg('128.180')">
        </div>
        <div class="movie-info">
          <ul>
            <li class="title">{{movie.nm}}</li>
            <li>导演：{{movie.dir}}</li>
            <li>主演：{{movie.star}}</li>
            <li>类型：{{movie.cat}}</li>
            <li>上映时间：{{movie.rt}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  name: "role",
  data() {
    return {
      keywords: "",
      movieList: []
    };
  },
  watch: {
    keywords(value) {
      this.axios.get("/api/searchList?cityId=10&kw=" + value).then(res => {
        if (res.data.status === 0) {
          this.movieList = res.data.data.movies.list;
        }
      });
    }
  },
  methods: {},
  components: {
    Header
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
.title {
  font-size: 18px;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eaeaea;
}
.search {
  margin: 15px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn {
  font-size: 16px;
  margin-left: 10px;
  padding: 2px 8px;
  background-color: #568bc9;
  color: #ffffff;
  /* outline: #eaeaea; */
}
.search input {
  font-size: 16px;
  height: 30px;
}
li {
  list-style: none;
}
span {
  font-size: 18px;
  font-weight: bold;
}
</style>
