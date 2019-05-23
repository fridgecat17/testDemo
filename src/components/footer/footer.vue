<template>
  <div id="footer">
    <div id="block">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/role">Role</router-link>
        <router-link to="/mine">Mine</router-link>
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Footer"
};
</script>

<style>
#footer {
  width: 100%;

}
#block {
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eaeaea;
  padding: 15px 0;
  position: fixed;
  bottom: 0;
}
#nav {
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
a {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  /* 去除下劃線 */
  text-decoration: none;
}
.box{
  height: 50px;
}
</style>
