<template>
  <div>
    <NavBar title=""/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "AppComponent",
  components: {
      NavBar,
  },
})
</script>

<style>
#app {
  font-family:"Segoe UI";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #05203b;
}
nav a.router-link-exact-active {
  color: #2be5a7;
}
</style>
