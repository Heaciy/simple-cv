<script setup lang="ts">
import { computed } from 'vue';
import { type HeaderLine, type Line, LineType } from '@/type';

interface LineProps {
    type: LineType;
    line: Line | HeaderLine;
}

const props = defineProps<LineProps>();

const formattedLine = computed(() => {
    if (props.type === LineType.Line) {
        return typeof props.line === 'string'
            ? `<span>${props.line}</span>`
            : `<span class="font-bold">${props.line[0]}: </span><span>${props.line[1]}</span>`;
    } else if (props.type === LineType.HeaderLine) {
        return (props.line as HeaderLine)
            .map(item => `<span class="text-xs">${typeof item === 'string' ? item : `${item[0]}: ${item[1]}`}</span>`)
            .join('<span class="text-xs">|</span>');
    }
    return '';
});
</script>



<template>
    <div v-html="formattedLine" class="flex gap-1"></div>
</template>