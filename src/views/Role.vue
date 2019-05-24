<template>
  <div class="container">
    <div class="Role">
      <Header title="Role"></Header>
      <div class="search">
        <input type="text" placeholder="请输入需要搜索的电影" v-model="keywords">
        <!-- <button class="btn" @click="search">搜索</button> -->
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
      var that = this;
      // 取消上一次请求
      this.cancelRequest();
      this.axios
        .get("/api/searchList?cityId=10&kw=" + value, {
          cancelToken: new this.axios.CancelToken(function executor(c) {
            that.source = c;
          })
        })
        .then(res => {
          if (res.data.status === 0 && res.data.data.movies) {
            this.movieList = res.data.data.movies.list;
          }
        })
        .catch(err => {
          if (this.axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        });
    }
  },
  methods: {
    /* search(e){
      var keywords = e.detail.value;
      console.log(keywords);
      this.axios.get("/api/searchList?cityId=10&kw=" + keywords).then((res) => {
        if (res.data.status === 0) {
          this.movieList = res.data.data.movies.list;
        }
      })
    } */
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    }
  },
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
  width: 80%;
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
