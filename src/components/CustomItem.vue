<template>
    <div class="product-item">
        <div class="col">
            <div class="card">
            <img :src="product.images[0]" class="card-img-top" :alt="product.title">
            <div class="card-body">
                <h5 class="card-title">{{ product.id }} - {{ product.title }}</h5>
                <p class="card-text">Precio: € {{ product.price }}</p>
                <button type="button" class="btn btn-info"><a class="card-link"  @click="$emit('goDetail', product)">Obtener más detalles</a></button>
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
margin: 20px 10px 0;
width: 300px;
display: flex;
}
.card-link {
color:#06132b;
text-decoration: none;
}
.card-title {
color:#292929;
font-size: 20px;
font-weight: bold;
}

button{
border: #30ffba;
background: #30ffba;
color: #06132b;
border-radius: 30px;
padding: 10px 20px;
}
button:a {
cursor: pointer;
background-image: linear-gradient(80deg, #2be5a7, rgb(114, 213, 155));
}
button:hover {
cursor: pointer;
background-image: linear-gradient(80deg, rgb(43, 229, 167), rgb(114, 213, 155));
color: #06132b;
}
.btn-info {
--bs-btn-color: #fff;
--bs-btn-bg: #30ffba;
--bs-btn-border-color: #30ffba;
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: #30ffba;
}
</style>

