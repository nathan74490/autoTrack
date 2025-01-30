<script setup>
import { ref } from 'vue'
import LicensePlate from '@/views/LicensePlate.vue'
import Search from '@/views/Search.vue'

const title = ref('v-model argument example')
</script>

<template>
    <div id="home">
        <h1>{{ title }}</h1>
        <LicensePlate v-model:title="title" />
        <nav id="search">
            <Search />
        </nav>
    </div>
</template>

<style>
#search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#plateInput {
    align-self: center;
}

#home {
    padding-top: 10vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vh;
}
</style>
