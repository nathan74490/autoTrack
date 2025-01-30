<template>
    <header>
        <RouterLink to="/"><h1 class="orbitron-title">Autotrack</h1></RouterLink><img id="dp_fr" src="@/components/icons/france-28463_1280.png" alt="drapeau france">
    </header>
</template>

<script setup>
</script >

<style>

header{
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
h1{
    color: white;
}

#dp_fr{
    width: 30px;
    height: 20px;
}
</style>