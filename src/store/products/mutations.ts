import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ProductsStateInterface } from "./state";

const mutations: MutationTree<ProductsStateInterface> = {
    setProducts(state: ProductsStateInterface, products: Product[]) {
        state.products = products;
    },
    setProductsFiltered(state: ProductsStateInterface, productsFiltered: Product[]) {
        state.productsFiltered = productsFiltered;
    },
    setIsLoading(state: ProductsStateInterface, value: boolean){
        state.isLoading = value;
    },
    setSelectedProduct(state, product: Product){
        state.selectedProduct = product;
    },
}

export default mutations;