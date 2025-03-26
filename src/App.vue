<script setup>
import { onMounted, nextTick } from 'vue';
import CV from './components/CV.vue';

const PAGE_HEIGHT = 1123; // A4 纸高度
const TOP_MARGIN = 64; // A4 页面的顶部边距
const BOTTOM_MARGIN = 64; // A4 页面的底部边距

const adjustMargins = () => {
    const elements = document.querySelectorAll(".page-break"); // 获取所有分页元素
    const a4Container = document.querySelector(".a4");

    if (!elements.length || !a4Container) return;

    let currentPageStart = a4Container.offsetTop; // A4 当前页起点

    elements.forEach((el) => {
        const elTop = el.offsetTop; // 获取当前元素的顶部位置

        // 检查是否跨页
        if (elTop - currentPageStart > PAGE_HEIGHT - BOTTOM_MARGIN) {
            // 计算 margin-top 让它对齐到下一个 A4 页面顶部边距
            let marginOffset = currentPageStart + PAGE_HEIGHT - elTop + TOP_MARGIN;
            // el.style.marginTop = `${marginOffset}px`
            el.style.setProperty("--page-margin", `${marginOffset}px`);

            // 进入下一页
            currentPageStart += PAGE_HEIGHT;
        } else {
            // 保持默认值
            el.style.setProperty("--page-margin", "0px");
        }
    });
};

onMounted(() => {
    nextTick(() => {
        adjustMargins();
    });
});
</script>

<template>
    <div class="a4">
        <div id="root">
            <CV></CV>
        </div>
    </div>
</template>

<style scoped></style>
