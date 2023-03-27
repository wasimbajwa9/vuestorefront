import { render } from '~/tests/unit/test-utils';
import ProductsCarousel from 'modules/advancedCommerce/search/components/ProductsCarousel.vue';
import ProductCard from 'modules/advancedCommerce/search/components/ProductCard.vue';

describe('Advanced Commerce - Product Carousel tests:', () => {
    test('Renders the title name', () => {
        const title = "Title for the carousel";
        const wrapper = render(ProductsCarousel, {
            propsData: {
                title : title
            }
        });
        expect(wrapper.html()).toContain(title);
    });

    //Assuming there will always be more than 4 products returned by the API
    test('Previous Arrow exists', () => {
        const wrapper = render(ProductsCarousel, {
            propsData: {
                title : "Title"
            }
        });
        expect(wrapper.findByTestId('carousel-prev-button')).toBeVisible();
    });

    //Assuming there will always be more than 4 products returned by the API
    test('Next Arrow exists', () => {
        const wrapper = render(ProductsCarousel, {
            propsData: {
                title : "Title"
            }
        });
        expect(wrapper.findByTestId('carousel-next-button')).toBeVisible();
    });
});

describe('Advanced Commerce - Product Card tests:', () => {
    test('Renders the Product name', () => {
        const productName = "MyProductName";
        const wrapper = render(ProductsCarousel, {
            propsData: {
                product : {
                    title: {
                        default: productName
                    },
                    media: {
                        thumbnail: {
                            src: '/1/7/17-02-22_ev_bethan5854.jpg'
                        }
                    }
                }
            }
        });
        expect(wrapper.html()).toContain(productName);
    });

    test('Renders the Product Image', () => {
        const imagePath = "/1/7/17-02-22_ev_bethan5854.jpg";
        const wrapper = render(ProductsCarousel, {
            propsData: {
                product : {
                    title: {
                        default: 'Sample Product'
                    },
                    media: {
                        thumbnail: {
                            src: imagePath
                        }
                    }
                }
            }
        });
        expect(wrapper.baseElement.querySelector('img').getAttribute('src')).toContain(imagePath);
    });
});