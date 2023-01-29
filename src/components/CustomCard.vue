<template>
    <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
            <slot name="header"></slot>
            <slot name="body"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "CustomCard",
});
</script>

<style scoped>
.card {
  width: 30rem;
  min-height:200px;
  border:0px solid rgba(0, 0, 0, 0.175);
  border-radius: 1rem;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>