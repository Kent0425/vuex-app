<template>
  <div id="crud">
    <div class="row justify-content-center">
      <b-button
        variant="outline-primary"
        class="mr-sm-2"
        @click="$router.push('add')"
        >+ Add Product</b-button
      >
      <b-button
        variant="outline-primary"
        class="mr-sm-2"
        @click="$router.push('delete')"
        >Delete Product</b-button
      >
      <b-button variant="outline-primary" @click="$router.push('update')"
        >Update Product</b-button
      >
    </div>
  </div>
</template>

<script></script>
