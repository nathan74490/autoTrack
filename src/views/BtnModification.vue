<template>
    <RouterLink :to="path">
        <slot></slot>
    </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    path: String
});
</script>

<style>

</style>
