<template>
    <!-- <ul >
      <li v-for="categ in piecesCar" :key="categ.value" >
        <h2>{{ categ.value }}</h2>
      </li>
    </ul> -->

</template>
<script setup>
    let piecesCar=JSON.parse(localStorage.getItem("piecesCar"));
    console.log(piecesCar.carrosserie)

</script>
<style></style>