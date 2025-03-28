<script setup lang="ts">
import { computed } from "vue";

const BOTTOM_MARGIN = 64; // A4 到页面底部的边距 // TODO
const props = defineProps<{ page_num: number, page_gap: number }>();
const container_height = computed(() => props.page_num * 1123 + props.page_gap * (props.page_num - 1));
</script>

<template>
    <div class="flex flex-col w-full container print:hidden"
        :style="{ height: `${container_height + BOTTOM_MARGIN}px`, gap: `${props.page_gap}px` }">
        <div class="page" v-for="page in page_num" :key="page"></div>
    </div>
</template>

<style scoped>
.container {
    position: absolute;
    top: 0;
    z-index: -1;
    margin-bottom: 64px;
}

.page {
    height: 1123px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
}
</style>