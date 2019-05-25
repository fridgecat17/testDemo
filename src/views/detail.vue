<template>
  <div class="detailContainer">
    <Header title="Detail">
      <i @touchstart="toBack">《</i>
    </Header>
    <div class="movieDetail" :style="bgc">
      <h3 class="title">{{detailMovie.nm}}</h3>
      <h4 class="title">{{detailMovie.enm}}</h4>
      <li>
        <img :src="detailMovie.albumImg" />
      </li>
      <li>{{detailMovie.cat}}</li>
      <li>{{detailMovie.dir}}</li>
      <li>{{detailMovie.dir}}</li>
      <li>{{detailMovie.dra}}</li>
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
      bgc: {
        backgroundColor: "#fff"
      }
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
  min-height: 100%;
  background-color: #fff;
}
i {
  font-style: normal;
  height: 30px;
  width: 30px;
  position: absolute;
  left: 15px;
  top: 20px;
}
.movieDetail{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title{
  align-self: center;
}
li{
  list-style:none;
}
</style>
