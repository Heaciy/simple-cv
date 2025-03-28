<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ pageNum: number, pageGap: number, pageHeight: number }>();
const containerHeight = computed(() => props.pageNum * 1123 + props.pageGap * (props.pageNum - 1));
</script>

<template>
    <div class="flex flex-col w-full container print:hidden"
        :style="{ height: `${containerHeight}px`, gap: `${props.pageGap}px` }">
        <div class="page" v-for="page in pageNum" :key="page"></div>
    </div>
</template>

<style scoped>
.container {
    position: absolute;
    top: 0;
    z-index: -1;
}

.page {
    height: 1123px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
}
</style>