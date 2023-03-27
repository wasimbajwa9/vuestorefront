<template>
  <div class="ac-product-card">
    <SfImage :src="acProductGetters.getImage(product.item)"
             :alt="acProductGetters.getName(product.item)"
             :width="250" :height="275"/>
    <SfHeading :title="acProductGetters.getName(product.item)" :level="6"/>
    <SfPrice :regular="regularPrice"
             :special="specialPrice"/>
  </div>
</template>

<script>
import {ref, useContext} from '@nuxtjs/composition-api';
import {SfImage, SfHeading, SfPrice} from "@storefront-ui/vue";
import acProductGetters from "~/modules/advancedCommerce/search/getters/acProductGetters";

export default {
  name: "ProductCard",
  components: {
    ref,
    useContext,
    SfImage,
    SfHeading,
    SfPrice,
    acProductGetters,
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const context = useContext();
    let productPrices = acProductGetters.getPrice(props.product.item);
    const regularPrice = context.$fc(productPrices.regular);
    const specialPrice = productPrices.special != null ? context.$fc(productPrices.special) : productPrices.special;

    return {
      acProductGetters,
      regularPrice,
      specialPrice
    };
  }
}
</script>

<style lang="scss" scoped>
.ac-product-card {
  h6.sf-heading__title.h6 {
    display: -webkit-box;
    margin-right: 10px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: left;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    text-overflow: ellipsis;
  }

  .sf-image--wrapper:hover {
    border: 1px solid black;
  }
}
</style>
