<template>
  <div class="container">
    <SfHeading
        :title="titleVal"
        :level="2"
        class="sf-heading--left sf-heading--no-underline title"/>

    <div v-if="product">
      <ProductRenderer :product="product"/>
    </div>

  </div>

</template>

<script>
import {SfHeading} from '@storefront-ui/vue';
import ProductRenderer from "../components/ProductRenderer";
import {useProduct} from '~/composables';
import {usePageStore} from "../stores/page";
import {ref, useFetch} from '@nuxtjs/composition-api'

export default {
  components: {
    SfHeading,
    ProductRenderer
  },
  setup() {
    const titleVal = "Product Info";
    const product = ref(null);

    const {routeData} = usePageStore();
    const {getProductDetails} = useProduct();
    const productParams = {
      filter: {
        sku: {
          eq: 'MSH12'
        }
      }
    };

    useFetch(async () => {
      const data = await getProductDetails(productParams);
      product.value = data.items?.[0];
    });

    return {
      titleVal,
      product
    };
  }
}
</script>
<style scoped>

</style>