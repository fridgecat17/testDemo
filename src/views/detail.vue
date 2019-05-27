<template>
  <div class="detailContainer">
    <Header title="Detail">
      <i @touchstart="toBack">《</i>
    </Header>
    <Loding v-if="flag"></Loding>
    <div v-else class="movieDetail">
      <li class="title">
        <img :src="detailMovie.img | setImg('300.620')">
      </li>
      <h3 class="title">{{detailMovie.nm}}</h3>
      <h4 class="title">{{detailMovie.enm}}</h4>
      <li>
        <b>类型：{{detailMovie.cat}}</b>
      </li>
      <li>
        <b>导演：{{detailMovie.dir}}</b>
      </li>
      <li>
        <b>演员：{{detailMovie.star}}</b>
      </li>
      <li>剧情简介：{{detailMovie.dra}}</li>
      <li>
        <b>剧照展示：</b>
        <div class="photoList">
          <li v-for="(photoUrl,i) in detailMovie.photos" :key="i">
            <img :src="photoUrl | setImg('328.136')">
          </li>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  name: "detail",
  data() {
    return {
      detailMovie: {},
      flag: true
    };
  },
  components: {
    Header
  },
  //可以在组件的props中直接获取需要的数据
  props: ["movieId"],
  methods: {
    toBack() {
      this.$router.back();
    }
  },
  mounted() {
    this.axios
      .get("/api/detailmovie?movieId=" + this.movieId)
      .then(res => {
        if (res.data.status === 0) {
          this.flag = false;
          this.detailMovie = res.data.data.detailMovie;
          this.bgc = res.data.data.detailMovie.backgroundColor;
        }
      })
      .catch(err => {
        console.log(err.data.msg);
      });
  }
};
</script>

<style scoped>
.detailContainer {
  position: absolute;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.photoList {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: scroll;
  margin-top: 10px;
}
.photoList img{
  height: 136px;
  width:auto;
}
.photoList li{
  padding: 0 20px 0 0;
}
i {
  font-style: normal;
  height: 30px;
  width: 30px;
  position: absolute;
  left: 15px;
  top: 20px;
}
.movieDetail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #eaeaea;
  padding: 10px 20px;
  overflow: scroll;
}
.title {
  align-self: center;
}
li {
  list-style: none;
  padding: 5px 20px;
}
</style>
