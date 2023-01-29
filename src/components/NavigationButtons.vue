<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#" @click="$emit('previous')">Anterior</a></li>
        <li class="page-item"><a class="page-link" href="#" @click="$emit('next')">Siguiente</a></li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CustomCard",
})
</script>

<style scoped>
a:hover {
  color:#37a4b5;
}
a {
  color:#248695;
  width: 160px;
}
</style>