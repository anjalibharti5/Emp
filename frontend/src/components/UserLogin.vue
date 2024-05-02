<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="credentials.username" type="text" placeholder="Username" required>
      <input v-model="credentials.password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    // login() {
    //   this.$axios.post('/api/login', this.credentials)
    //     .then(response => {
    //       this.$emit('authenticated', true);
    //       console.log('Logged in successfully');
    //     })
    //     .catch(error => {
    //       console.error('Error logging in', error);
    //     });
    // }
  }
}
</script>
