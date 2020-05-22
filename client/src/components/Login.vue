<template>
  <div class="login">
    <div class="card">
      <h4 class="card-title">
        Login
      </h4>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary" @click="loginButton">
            Login
          </button>
        </form>
        <p class="or">or</p>
        <button class="btn btn-outline-danger" @click="googleButton">
          SignIn Using Google
        </button>
        <p class="signupText">
          Don't have account ?
          <router-link to="/signup">SignUp Now</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginButton: function() {
      let credentials = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("localLogin", credentials);
    },
    googleButton: function() {
      this.$store.dispatch("googleLogin");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #3b3b3b;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 400px;
  border-radius: 10px;
  .card-title {
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
  }
  .or {
    text-align: center;
    margin: 5px;
    &:before {
      content: "";
      width: 48%;
      position: absolute;
      bottom: 115px;
      left: 0px;
      border-bottom: 1px solid lightgray;
    }
    &:after {
      content: "";
      width: 48%;
      position: absolute;
      bottom: 115px;
      right: 0px;
      border-bottom: 1px solid lightgray;
    }
  }
  .btn {
    width: 100%;
    border-radius: 50px;
  }
  .signupText {
    margin: 10px;
  }
}
</style>
