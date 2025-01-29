
<script setup>
import LicensePlate from "@/views/LicensePlate.vue"
import { RouterLink} from 'vue-router'
</script>

<template>
    <div id="home">
        <LicensePlate id="plateInput"></LicensePlate>
        <nav id="search">
            <RouterLink to="/"></RouterLink>
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
#plateInput{
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