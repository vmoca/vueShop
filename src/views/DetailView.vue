<template>
    <div>
        <NavbarLinks/>
        <div v-if="!isLoading" class="detailView">
            <CustomCard>
                <template v-slot:image>
                    <div v-if="!activePic" class="profile">
                        <div class="picture"><img :src="product.images[0]" class="card-img-top" alt=""></div>
                    </div>
                    <div v-else>
                        <div class="picture"><img :src="activePic" class="card-img-top" alt=""></div>
                    </div> 
                    <div class="pictures">
                        <div v-for="(image, index) in product.images" :key="index">
                                <img :src=image class="card-img-top" @click="changeActivePic(index)">
                        </div>
                    </div>
                </template>
                <template v-slot:header>
                    <h2 class="card-title">{{ product.id }} - {{ product.title }}</h2>
                </template>
                <template v-slot:body>
                    <p class="card-text">{{ product.description }}</p>
                </template>
                <template v-slot:footer>
                    <h2>Precio: € {{ product.price }}</h2>
                </template>
            </CustomCard>
        </div>
        <div v-else>Cargando...</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import useProducts from "../composables/useProducts";
import NavbarLinks from "../components/NavbarLinks.vue";
import CustomCard from "../components/CustomCard.vue";

export default defineComponent({
    name: "DetailView",
    components: {
        NavbarLinks,
        CustomCard,
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const {product, fetchProductById, isLoading} = useProducts();
        fetchProductById(props.id);
        let activePic = ref();   
        const changeActivePic = (index: number) => {
            activePic.value = product.value.images[index];
        }
        return {
            product,
            isLoading,
            activePic,
            changeActivePic
        }
    }
})
</script>

<style scoped>
.detailView {
    margin-top: -40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
}
.pictures {
    width: 900px;
    display:flex;
    
}
.pictures img {
    width: 150px;
    margin:5px;
    border-radius: 8px;
    justify-content: center;
    display: flex;
}
</style>