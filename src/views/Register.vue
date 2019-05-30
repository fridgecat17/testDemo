<template>
  <div class="container">
    <Header title="Register">
      <i @touchstart="toBack">《</i>
    </Header>
    <div class="register">
      <form method="post" class="info">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2916501249,3129074706&fm=26&gp=0.jpg"
        >
        <label>
          用户名：
          <input type="text" placeholder="请输入用户名">
        </label>
        <label>
          密&emsp;码：
          <input type="password" placeholder="请输入密码">
        </label>
        <button type="submit">注册/登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";

export default {
  name: "register",
  data() {
    return {};
  },
  methods: {
    toBack() {
      this.$router.back();
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: #eaeaea;
}
i {
  font-style: normal;
  height: 30px;
  width: 30px;
  position: absolute;
  left: 15px;
  top: 20px;
}
.info {
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 5px 5px 5px #787878;
}
.info img {
  height: 150px;
  width: 150px;
  align-self: center;
  margin: 25px 0 100px 0;
}
.info label {
  align-self: center;
  padding-bottom: 50px;
  font-size: 18px;
  font-weight: 900;
}
input {
  font-size: 18px;
  border: none;
  border-bottom: 1px solid black;
  /* 点击边框轮廓 */
  outline: 0;
}
.info button {
  color: blanchedalmond;
  font-weight: bold;
  font-size: 19px;
  height: 45px;
  background-color: #3975ce;
  border-radius: 5px;
  margin-bottom: 50px;
}
</style>
