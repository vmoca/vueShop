<template>
    <header>
        <div class="header-logo">
            <img src="../assets/logo_vueshop.png" alt="logo shop" width="140">
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface NavbarProps {
    title: string,
}

export default defineComponent({
    name: "NavBar",
    props: {
        title: {
            type: String,
            required: true,
            default: "Vue Shop"
        }
    }
})
</script>

<style scoped>
nav {
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: rgb(0,0,0);
    font-weight: bold;
}
.header-logo {
    padding-top: 20px;
}
    
p {
    color: rgb(0, 0, 0);
    padding: 10px
}
    
h5 {
    padding: 20px
}
</style>