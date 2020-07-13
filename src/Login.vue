<template>
  <div id="login">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div>
          <b-form @submit="onLogin" @reset="onReset" v-if="show">
            <h1 style="text-align:center;">Login to vueXapp</h1>
            <br />
            <br />
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                style="-webkit-text-security: square;"
                v-model="form.password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <div class="row justify-content-center">
              <b-button
                class="mr-3"
                type="submit"
                @click="$router.push('dashboard')"
                variant="primary"
                >Login</b-button
              >
              <b-button
                class="ml-3"
                type="submit"
                @click="$router.push('register')"
                variant="danger"
                >Register</b-button
              >
            </div>
          </b-form>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onLogin(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped></style>
