<template>
  <div class="container">
    <Header title="Mine"></Header>
    <div class="mine">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558968158176&di=721909be802a7c65c20dd2a90cf44467&imgtype=0&src=http%3A%2F%2Fpic215.nipic.com%2Ffile%2F20190512%2F9355665_205619936088_2.jpg" alt="">
      <div class="meInfo">
        <li>昵称：</li>
        <li>ID：</li>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
export default {
  name: "mine",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.mine{
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.mine>img{
  height: 50px;
  width: auto;
  margin-right: 20px;
}
.meInfo{
    align-self: center;
}
</style>
