<template>
  <div>
    <NavbarLinks @showAll="showAllProducts"/>
    <form @submit.prevent="validateInput">
      <div class="input-group mb-3">
        <input v-model.lazy="inputFilter" type="text" class="form-control" placeholder="Buscar productos" aria-label="Recipient's username" aria-describedby="button-addon2" minlength="3">
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
    </form>
    <NavigationButtons @previous="showPrevious" @next="showNext"/>
    <div class="home">
      <div v-if="isLoading"> Cargando... </div>
      <div class="product-list" v-else>
        <CustomItem v-for="product in productsFiltered" :key="product.id" :product="product" @goDetail="goDetail"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import CustomItem from "../components/CustomItem.vue";
import useProducts from "../composables/useProducts";
import NavigationButtons from "../components/NavigationButtons.vue";
import { Product } from "../models/product";
import { useRouter } from "vue-router";
import NavbarLinks from "../components/NavbarLinks.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CustomItem,
    NavbarLinks,
    NavigationButtons,
  },
  setup(){
    const {products, productsFiltered, isLoading, productsLength, fetchProducts, fetchProductByTitle, fetchProductByPagination } = useProducts();
    const router = useRouter();
    fetchProducts();
    let inputFilter = ref("");
 
    const limitShow = 20;
    const showAllProducts = () => {
      fetchProductByPagination({offset: 0, limit: limitShow});
    }
    fetchProductByPagination({offset: 0, limit: limitShow});
 
    const validateInput = () => {
      const filter = inputFilter.value.toLowerCase(); 
      for(let i = 0; i < productsLength.value; i++){
        if (products.value[i].title.toLowerCase().includes(filter)){    
          const titleArray = products.value[i].title.split(" ");
          for(let j = 0; j < titleArray.length; j++){
            if(titleArray[j].toLowerCase().includes(filter)){
              fetchProductByTitle(titleArray[j]);
            }
          }
        }
      }
    }
    let offset = 0;
    const showPrevious = () =>{
      if (offset == 0){
        alert("No hay productos anteriores")
      }else{
        offset = offset - 20;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
    }
    const showNext = () =>{
      if (offset >= productsLength.value){
        alert("No hay más productos")
      }else{
        offset = offset + 20;
        fetchProductByPagination({offset: offset, limit: limitShow});
      }
    }
    return {
      products,
      productsFiltered, 
      isLoading,
      goDetail: (product: Product)=> router.push({name: "detail", params: {id: product.id}}),
      inputFilter,
      validateInput,
      showAllProducts,
      showPrevious,
      showNext
    }
  }
});
</script>

<style scoped>
.input-group {
    height: 32px;
    padding-right: 16px;
    padding-left: 36px;
    border-radius: 99px;
    border: 0;
    background: var(--grey-light);
    font-weight: 400;
    font-size: 16px;
    color: var(--dark);
}
.form-control {
  position: relative;
}
.product-list {
  justify-content:space-between;
  padding: 10;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>
