<template>
  <div class="signup">
    <div class="card">
      <h4 class="card-title">
        SignUp
      </h4>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">User Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
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
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">SignUp</button>
        </form>
      </div>
      <p class="loginText">
        Already a user?
        <router-link to="/">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp"
};
</script>

<style lang="scss" scoped>
.signup {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 400px;
  border-radius: 10px;
  .btn {
    width: 100%;
    border-radius: 30px;
  }
  .card-title {
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
  }
  .loginText {
    text-align: center;
  }
}
</style>
