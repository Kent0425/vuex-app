<template>
  <div id="dashboard">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Dashboard</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" @click="$router.push('crud')"
              >Product</b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push('login')"
                >Sign Out</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div id="nav">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["productName", "productId", "productStatus"],
      items: [
        {
          isActive: true,
          productStatus: "Available",
          productName: "Colgate",
          productId: "00000001",
        },
        {
          isActive: false,
          productStatus: "Out of stock",
          productName: "Wilkins",
          productId: "00000002",
        },
        {
          isActive: false,
          productStatus: "Out of Stock",
          productName: "Listerine",
          productId: "00000003",
        },
        {
          isActive: true,
          productStatus: "Available",
          productName: "Oral-B Dental Floss",
          productId: "00000004",
        },
      ],
    };
  },
};
</script>

<style scoped>
#dashboard {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
