<script setup lang="ts">
import Body from './Body.vue';
import Header from './Header.vue';

import { data } from '@/data';

</script>

<template>
    <div class="h-full flex flex-col justify-between p-12 gap-3">
        <Header :header="data.header"></Header>

        <Body :body="data.body"></Body>
    </div>
</template>