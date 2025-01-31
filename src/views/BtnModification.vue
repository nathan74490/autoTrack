<template>
    <RouterLink :to="path" >
        <slot></slot>
    </RouterLink>
</template>
<script>
import { RouterLink } from "vue-router"
export default {
    props: {
        path: String
    }
}
</script>
<style>

</style>