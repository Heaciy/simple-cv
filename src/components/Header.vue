<script setup lang="ts">
import { type Header, LineType } from "@/type";
import Line from "./Line.vue";

const props = defineProps<{ header: Header }>();
</script>


<template>
    <div className="relative flex flex-col gap-1 items-center text-xs">
        <div class="text-2xl font-bold">{{ props.header.name }}</div>
        <div v-for="line in props.header.lines">
            <Line :line="line" :type="LineType.HeaderLine"></Line>
        </div>
    </div>
</template>