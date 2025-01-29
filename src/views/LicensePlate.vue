<template>
    <div class="plate-container">
        <div class="plate-left">F</div>
        <input type="text" class="plate-input" maxlength="9" placeholder="XX-123-XX">
        <div class="plate-right"></div>
    </div>
</template>
<script></script>
<style>
.plate-container {
    display: flex;
    align-items: center;
    background: white;
    border: 3px solid black;
    border-radius: 8px;
    /* padding: 5px; */
    width: 250px;
}

.plate-left,
.plate-right {
    width: 30px;
    height: 50px;
    background: #0033a0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    /* border-radius: 4px; */
}

.plate-left {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.plate-right {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.plate-input {
    flex: 1;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    outline: none;
    width: 180px;
}
</style>