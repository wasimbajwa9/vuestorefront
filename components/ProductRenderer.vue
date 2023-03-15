<template>
  <div>
    <div class="image">
      <SfImage :src="getCoverImage(product)" :alt="getName(product)" :width="150" :height="150"/>
    </div>
    <div class="content">
      <SfHeading :title="getName(product)" :description="getDescription(product)" :level="3"/>
    </div>
<!--    <div class="price">-->
<!--      <SfPrice :regular="getPrice(product)"/>-->
<!--    </div>-->
    <div class="rating">
      <SfRating :score="getAverageRating(product)" :max="5"/>
    </div>
    <div class="actions">
      <SfAddToCart :qty="1"/>
    </div>
  </div>
</template>

<script>

import {
  SfHeading,
  SfImage,
  SfSelect,
  SfAddToCart,
  SfPrice,
  SfRating
} from '@storefront-ui/vue'

import {
    getAttributes,
    getName,
    getDescription,
    getPrice,
    getAverageRating,
    getTotalReviews,
    getCoverImage
} from "../modules/catalog/product/getters/productGetters";

export default {
  name: 'ProductRenderer',
  components: {
    SfHeading,
    SfImage,
    SfSelect,
    SfAddToCart,
    SfPrice,
    SfRating
  },

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  setup() {
    return{
      getAttributes,
      getName,
      getDescription,
      getPrice,
      getAverageRating,
      getTotalReviews,
      getCoverImage
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-product-cart {
  .sf-heading {
    text-align: left;
  }

  .sf-add-to-cart {
    --c-primary: blue;
  }
}
</style>