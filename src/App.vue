<template>
  <div id="app">
     <van-button round block type="info" native-type="button" @click="getToken('wuxin')">登录</van-button>
    <router-view />
  </div>
</template>
<script>
import { encrypt, enKey } from "./assets/security.js";
export default {
  methods: {
    getToken(name) {
      const param = {
        id: name,
        password: "107616"
      };
      const json = JSON.stringify(param);
      const enc = encrypt(enKey, json);
      this.$request({
        serviceName: "user",
        servicePath: "login",
        param: enc
      })
        .then(result => {
          let res = JSON.parse(result.msgDetail);
          self.userToken = res.token;
          sessionStorage.setItem("Authorization", self.userToken);
          self.loginDialogVisible = false;
          window.location.reload();
          // callback();
        })
        .catch(msg => self.$message.error(msg));
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
