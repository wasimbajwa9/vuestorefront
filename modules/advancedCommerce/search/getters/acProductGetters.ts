import type {Price} from '~/modules/catalog/types';
import {htmlDecode} from '~/helpers/htmlDecoder';
import {Maybe, Scalars} from "~/modules/GraphQL/types";


export interface ACProductInterface {
    id: Maybe<Scalars['String']>;
    titles: Maybe<ACProductTitle>;
    media: Maybe<ACProductMedia>;

    max_pricing: Maybe<PriceInfo>;
    min_pricing: Maybe<PriceInfo>;
    pricing: Maybe<PriceInfo>;
}

export interface ACProductTitle {
    default: Maybe<Scalars['String']>;
}

export interface ACProductMedia {
    image: Maybe<ImageProperty>;
    small_image: Maybe<ImageProperty>;
    thumbnail: Maybe<ImageProperty>;
}

export interface ImageProperty {
    src: Maybe<Scalars['String']>;
}

export interface PriceInfo {
    cost: Maybe<Scalars['Float']>;
    price: Maybe<Scalars['Float']>;
    rrp: Maybe<Scalars['Float']>;
    was: Maybe<Scalars['Float']>
}

export interface ACProductGetters {
    getId: (product: ACProductInterface) => string;
    getName: (product: ACProductInterface) => string;
    getImage: (product: ACProductInterface) => string;
    // getCoverImage: (product: ACProductInterface) => string;
    getPrice: (product: ACProductInterface) => Price;
}

export const getName = (product: ACProductInterface): string => {
    if (!product) {
        return '';
    }
    return htmlDecode(product.titles.default);
};

export const getImage = (product: ACProductInterface): string => {
    if (!product) {
        return '';
    }
    return "https://ego.co.uk/media/catalog/product" + product.media.thumbnail.src;
};

export const getPrice = (product: ACProductInterface): Price => {
    let regular = 0;
    let special = null;
    let maximum = null;
    let final = null;
    if (product?.min_pricing) {
        regular = product.min_pricing.was;
        final = product.min_pricing.price;
        maximum = product.max_pricing.price;
        if (regular == 0) {
            regular = final;
        }

        if (final < regular) {
            special = final;
        }
    }

    return {
        regular,
        special,
        maximum,
        final,
    };
}

export const getId = (product: ACProductInterface): string => product.id;

const acProductGetters: ACProductGetters = {
    getId,
    getName,
    getImage,
    getPrice
};

export default acProductGetters;
