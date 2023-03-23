<template>
  <div>
    <SfSection :titleHeading="title" :levelHeading="4">
      <SfLoader v-if="loading" :loading="loading"/>
      <SfCarousel v-else>
        <SfCarouselItem v-for="product in products">
          <ProductCard :product="product"/>
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
  </div>
</template>

<script>
import {
  ref,
  useContext,
  onMounted,
  useFetch,
} from '@nuxtjs/composition-api';
import {SfSection, SfCarousel, SfLoader} from "@storefront-ui/vue";
import ProductCard from "~/modules/advancedCommerce/search/components/ProductCard.vue";

export default {
  name: 'ProductsCarousel',

  components: {
    SfSection,
    SfCarousel,
    SfLoader,
    ProductCard,
    ref,
    useContext,
    onMounted,
    useFetch
  },
  props: {
    title: {
      type: String,
      required: false
    }
  },

  setup() {
    const products = ref([]);
    const loading = ref(true);
    const getProducts = async () => {
      const response = await fetch('https://6411a090b80d57320a118aaa.mockapi.io/api/v1/youMayAlsoLike/products')
      return await response.json();
    }

    onMounted(async () => {
          var data = await getProducts();
          console.log(data);
          products.value = data;
          loading.value = false;
        }
    );

    return {
      products,
      loading
    };
  }

}
</script>
<style lang="scss" scoped>
.sf-section {
  margin: 0;
}
</style>
