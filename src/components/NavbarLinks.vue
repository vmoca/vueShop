<template>
    <div>
        <nav>
            <div>
                <!--<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                </svg>-->
            </div>
            <div>
                <ul>
                <li>
                    <router-link to="/" @click="showAllProducts">Productos</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'profile'}">Mi perfil</router-link>
                </li>
            </ul>
            </div>
            <div>
                <div class="logout-container" @click="logout">
                    <p>Salir</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                </div>
                
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAuthUser from "../composables/useAuthUser";

export default defineComponent({
    setup(props, { emit }) {
        const showAllProducts = () =>{
            emit("showAll")
        }
        const { deleteToken } = useAuthUser();
        const logout = () => {
            deleteToken();
        }
        return { 
            showAllProducts,
            logout,
        }
    },
})
</script>

<style scoped>
p {
    margin: 0;
}
nav { 
    margin-top: 20px;
    background-color: white;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
}
li {
    padding: 1rem;
    font-weight: bold;
    font-size: x-large;
}
a {
    color: #000000;
    text-decoration: none;
}
a:hover {
  color: #2be5a7;
}
svg {
    margin-left: 20px;
    margin-right: 20px;
}
body {
	font-family: 'Quicksand', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
}
.logout-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logout-container:hover {
    color: #2be5a7;
}
</style>