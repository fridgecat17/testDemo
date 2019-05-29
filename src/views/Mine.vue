<template>
  <div class="container">
    <router-view></router-view>
    <Header title="MINE"></Header>
    <div class="login" v-if="loginFlag">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558968158176&di=721909be802a7c65c20dd2a90cf44467&imgtype=0&src=http%3A%2F%2Fpic215.nipic.com%2Ffile%2F20190512%2F9355665_205619936088_2.jpg" alt="">
      <div class="meInfo">
        <li>昵称：</li>
        <li>ID：</li>
      </div>
    </div>
    <div class="login" v-else>
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559139972727&di=44b74002104df5719bc35cd4d1bf95cc&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F00%2F94%2F68%2F58dcd704b0803_610.jpg" alt="">
      <div class="meInfo">
        <li>未登录</li>
        <li>点击<a @click="toRegister">登录/注册</a></li>
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
  data(){
    return {
      loginFlag: false,
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    toRegister(){
      this.$router.push('/Mine/register');
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.login{
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #eaeaea;
  box-shadow:5px 5px 5px  #eaeaea;
}
.login>img{
  height: 50px;
  width: auto;
  margin-right: 20px;
}
.meInfo{
    align-self: center;
}
</style>
