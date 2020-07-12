<template>
  <div id="login">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1 style="text-align: center;">Login to VueXapp</h1>
        <br />
        <br />
        <form v-on:submit.prevent>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="row justify-content-center">
            <button
              type="submit"
              @click="$router.push('app')"
              class="btn btn-primary"
            >
              Login
            </button>
            <button
              type="submit"
              @click="$router.push('register')"
              class="btn btn-primary"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
