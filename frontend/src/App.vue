<template>
  <div id="app">
    <User-login v-if="!loggedIn"></User-login>
    <employee-dashboard v-else></employee-dashboard>
  </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import UserLogin from './components/UserLogin.vue';
import EmployeeDashboard from './components/EmployeeDashboard.vue';

// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    UserLogin,
    EmployeeDashboard
    // HelloWorld
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
