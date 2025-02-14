<template>
    <RouterLink to="/infoRecherche"><button id="buttonSearch"@click="$emit('click')">Search</button></RouterLink>
</template>
<script setup>
import { RouterLink } from 'vue-router'
defineEmits(['click'])
</script>
<style>
    #buttonSearch{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #24B600;
        color: white;
        width: 265px;
        height: 54px;
        border-radius: 15px;
    }
</style>