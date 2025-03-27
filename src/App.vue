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

    elements.forEach((el, index) => {
        let marginOffset = 0;
        const elTop = el.offsetTop; // 获取当前元素的顶部位置
        const elBottom = Math.min(el.offsetTop + el.offsetHeight, elements[index + 1]?.offsetTop ?? Infinity);

        // 计算相对于当前 A4 页面顶部的高度
        const bottomlineHeight = PAGE_HEIGHT - BOTTOM_MARGIN; // 当前页面底部分隔线的高度
        const elTopHeight = elTop - currentPageStart;
        const elBottomHeight = elBottom - currentPageStart;

        // 检查是否跨页
        if (elTopHeight > bottomlineHeight) {
            // 上边界跨在分隔区：调整 margin-top 让它对齐到下一个 A4 页面顶部
            marginOffset = BOTTOM_MARGIN + TOP_MARGIN - (elTopHeight - bottomlineHeight)
            currentPageStart += PAGE_HEIGHT;
        } else if (elBottomHeight > bottomlineHeight) {
            // 下边界跨在分隔区：判断是否真的需要分页
            const topPartHeight = bottomlineHeight - elTopHeight;
            const bottomPartHeight = elBottomHeight - bottomlineHeight;

            // 只有当超出部分比留在当前页的部分大时或超出过多时，才换页
            if (bottomPartHeight >= topPartHeight || bottomPartHeight >= BOTTOM_MARGIN / 2) {
                marginOffset = bottomlineHeight - elTopHeight + BOTTOM_MARGIN + TOP_MARGIN
                currentPageStart += PAGE_HEIGHT;
            }
        }
        // 避免 marginOffset 负值
        marginOffset = Math.max(0, marginOffset);
        el.style.setProperty("--page-margin", `${marginOffset}px`);
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
