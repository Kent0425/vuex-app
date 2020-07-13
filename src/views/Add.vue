<template>
  <div>
    <h3 style="text-align:center;">Add Product</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.productName"
          type="productName"
          required
          placeholder="Enter product name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.productId"
          required
          placeholder="Enter product ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Status:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Enter product status"
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        @click="$router.push('dashboard')"
        >Add</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        productName: "",
        productId: "",
        productStatus: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.productName = "";
      this.form.productId = "";
      this.form.productStatus = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
>
