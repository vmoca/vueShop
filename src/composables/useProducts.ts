import { Pagination } from "@/models/pagination";
import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
    // Accedo al store:
    const store = useStore();
    return {
        products: computed(()=> store.getters["products/getProducts"]),
        productsFiltered: computed(()=> store.getters["products/getProductsPagination"]),
        isLoading: computed(()=> store.getters["products/getIsLoading"]),
        product: computed(()=> store.getters["products/getProduct"]),
        productsLength: computed(()=> store.getters["products/getProductsLength"]),

        fetchProducts: () => store.dispatch("products/fetchProducts"),
        fetchProductById: (productId: number) => store.dispatch("products/fetchProductById", productId),
        fetchProductByTitle: (productTitle: string) => store.dispatch("products/fetchProductByTitle", productTitle),
        fetchProductByPagination: (pagination: Pagination) => store.dispatch("products/fetchProductByPagination", pagination),
    }
};

export default useProducts;