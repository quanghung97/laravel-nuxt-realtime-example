<template>
  <div>
    <b-container>
      <div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            id="exampleInputEmail1"
            v-model="userInfo.email"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            id="exampleInputPassword1"
            v-model="userInfo.password"
            type="password"
            class="form-control"
            placeholder="Password"
          >
        </div>
        <div class="form-group form-check">
          <input id="exampleCheck1" type="checkbox" class="form-check-input">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="button" class="btn btn-primary" @click="goLogin">Submit</button>
        <Button class="ml-auto p-2 bd-highlight" primary @click="redirect">Redirect to Test JSON-LD</Button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async goLogin() {
      await this.$store.dispatch("auth/goLogin", this.userInfo);
    },
    redirect() {
      this.$router.push({
        path: "/socket"
      });
    }
  }
};
</script>
