<script setup lang="ts">
import { type Body, LineType } from '@/type';
import Line from './Line.vue';
const props = defineProps<{ body: Body }>();
</script>

<template>
    <div v-for="group in props.body" class="flex flex-col gap-[8px] text-xs page-break">
        <div className="relative h-[20px]">
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-neutral-300" />
            <div className="absolute bottom-0 left-0 w-[110px] border-b-[24px] border-r-[6px] border-r-transparent border-neutral-300"></div>
            <div className="absolute bottom-0 left-0 w-[98px] border-b-[28px] border-r-[7px] border-r-transparent border-neutral-800"></div>
            <div className="absolute bottom-0 left-0 h-[28px] w-[86px] text-sm font-bold text-white flex justify-center items-center">
                {{ group.title }}
            </div>
        </div>
        <div v-for="section in group.sections" class="flex flex-col gap-[4px] page-break">
            <div v-if="section.leftTop || section.rightTop" class="flex justify-between page-break">
                <span class="font-bold">{{ section.leftTop }}</span>
                <span>{{ section.rightTop }}</span>
            </div>
            <div v-if="section.leftBottom || section.rightBottom" class="flex justify-between page-break">
                <span>{{ section.leftBottom }}</span>
                <span>{{ section.rightBottom }}</span>
            </div>
            <div class="page-break">
                <ul v-for="line in section.lines" class="list-disc">
                    <li class="leading-5 ml-4">
                        <Line :line="line" :type="LineType.Line"></Line>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>