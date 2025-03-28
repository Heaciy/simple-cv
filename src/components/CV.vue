<script setup lang="ts">
import { onMounted, nextTick, ref, onBeforeMount, onBeforeUnmount, watch } from 'vue';

import Body from './Body.vue';
import Header from './Header.vue';
import Borders from "./Borders.vue";
import { data } from '@/data';

const PAGE_HEIGHT = 1123; // A4 纸高度
const TOP_MARGIN = 64;    // A4 页面的顶部边距
const BOTTOM_MARGIN = 64; // A4 页面的底部边距
const PAGE_NUM = ref(1);  // A4 页面的数量
const PAGE_GAP = ref(32); // A4 页面之间的间隔

function removePageGap() {
    // 去除页面之间的间隔
    PAGE_GAP.value = 0;
}

function addPageGap() {
    // 增加页面之间的间隔
    PAGE_GAP.value = 32;
}

const adjustMargins = () => {
    // 实现自动分页效果
    const elements = document.querySelectorAll<HTMLElement>(".page-break"); // 获取所有分页元素
    const a4Container = document.querySelector<HTMLElement>(".a4");

    if (!elements.length || !a4Container) return;

    let currentPageStart = 0; // A4 当前页起点
    let pageNum = 1; // 初始 A4 页数

    // 每次重新调整前还原初始 Margin 值
    elements.forEach((el) => {
        el.style.setProperty("--page-margin", `${0}px`);
    })

    // 重新计算 Margin
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
            marginOffset = BOTTOM_MARGIN + TOP_MARGIN - (elTopHeight - bottomlineHeight) + PAGE_GAP.value
            currentPageStart += PAGE_HEIGHT + PAGE_GAP.value;
            pageNum += 1;
        } else if (elBottomHeight > bottomlineHeight) {
            // 下边界跨在分隔区：判断是否真的需要分页
            const topPartHeight = bottomlineHeight - elTopHeight;
            const bottomPartHeight = elBottomHeight - bottomlineHeight;

            // 只有当超出部分比留在当前页的部分大时或超出过多时，才换页
            if (bottomPartHeight >= topPartHeight || bottomPartHeight >= BOTTOM_MARGIN / 2) {
                marginOffset = bottomlineHeight - elTopHeight + BOTTOM_MARGIN + TOP_MARGIN + PAGE_GAP.value
                currentPageStart += PAGE_HEIGHT + PAGE_GAP.value;
                pageNum += 1;
            }
        }
        // 避免 marginOffset 负值
        marginOffset = Math.max(0, marginOffset);
        el.style.setProperty("--page-margin", `${marginOffset}px`);
    });

    // 更新 A4 页数
    PAGE_NUM.value = pageNum;

    // 调整 A4 容器高度
    const containerHeight = PAGE_NUM.value * PAGE_HEIGHT + (PAGE_NUM.value - 1) * PAGE_GAP.value; // 计算新的 A4 高度
    a4Container.style.height = `${containerHeight}px`; // 调整 A4 容器高度
};

onMounted(() => {
    nextTick(() => {
        adjustMargins();
    });
});

watch(PAGE_GAP, adjustMargins);

onBeforeMount(() => {
    window.addEventListener("beforeprint", removePageGap);
    window.addEventListener("afterprint", addPageGap);
})

onBeforeUnmount(() => {
    window.removeEventListener("beforeprint", removePageGap);
    window.removeEventListener("afterprint", addPageGap);
})

</script>

<template>
    <div class="a4">
        <!--正文部分-->
        <div id="root">
            <div class="h-full flex flex-col p-12 gap-3">
                <Header :header="data.header"></Header>

                <Body :body="data.body"></Body>
            </div>
        </div>
        <!--绘制 A4 边框-->
        <Borders :page-num="PAGE_NUM" :page-gap="PAGE_GAP" :page-height="PAGE_HEIGHT"></Borders>
    </div>
</template>