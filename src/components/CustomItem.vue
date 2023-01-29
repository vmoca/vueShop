<template>
    <div class="product-item">
        <div class="col">
            <div class="card">
            <img :src="product.images[0]" class="card-img-top" :alt="product.title">
            <div class="card-body">
                <h5 class="card-title">{{ product.id }} - {{ product.title }}</h5>
                <p class="card-text">Precio: € {{ product.price }}</p>
                <a class="card-link"  @click="$emit('goDetail', product)">Obtener más detalles</a>
            </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "../models/product";

export default defineComponent({
    props: {
        product:{
            type: Object as PropType<Product>,
            required: true,
        }
    },
})
</script>

<style scoped>
.product-item {
    position: relative;
    margin-top: 20px;
    margin-left: 20px;
    width: 300px;
    display: flex;
    }
.card-link {
    color:#248695;
}
.card-title {
    color:#137b8b;
    font-size: 20px;
    font-weight: bold;
}
</style>

