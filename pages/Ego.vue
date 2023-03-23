<template>
  <div>
    <ProductsCarousel :title="$t('Discover Our New Products')"/>
  </div>
</template>

<script>
import ProductsCarousel from "~/modules/advancedCommerce/search/components/ProductsCarousel.vue";

export default {
  components: {
    ProductsCarousel
  },
}
</script>

<style>
</style>
