<template>
  <div id="footer">
    <div id="block">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/role">Role</router-link>
        <router-link to="/mine">Mine</router-link>
      </div>
    </div>
    <div style="height:50px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Footer"
};
</script>

<style>
#block {
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  height: 50px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eaeaea;
  padding: 15px 0;
/*   position: absolute;
  bottom: 0; */
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
</style>
