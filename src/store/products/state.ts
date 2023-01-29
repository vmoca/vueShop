import { Product } from "@/models/product";

export interface ProductsStateInterface {
    products: Product[];
    productsFiltered: Product[];
    isLoading: boolean;
    selectedProduct: Product | null;
}

function state(): ProductsStateInterface {
    return {
        products: [],
        productsFiltered: [],
        isLoading: false,
        selectedProduct: null,
    }
}

export default state;